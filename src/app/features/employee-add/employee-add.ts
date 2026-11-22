import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { EmployeeStatus } from '../../core/models/employee.model';
import { NotificationService } from '../../core/state/notification.service';
import { SearchableSelectComponent } from '../../shared/components/searchable-select/searchable-select';
import {
  maxTodayValidator,
  trimmedRequiredValidator,
} from '../../shared/validators/date.validators';

function formatLocalDateTimeInput(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
    `T${pad(date.getHours())}:${pad(date.getMinutes())}`
  );
}

@Component({
  selector: 'app-employee-add',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, SearchableSelectComponent],
  templateUrl: './employee-add.html',
  styleUrl: './employee-add.scss',
})
export class EmployeeAddComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly employeeApi = inject(EmployeeApiService);
  private readonly notification = inject(NotificationService);

  readonly groups = toSignal(this.employeeApi.getGroups().pipe(catchError(() => of([]))), {
    initialValue: [] as string[],
  });

  readonly statusOptions: readonly EmployeeStatus[] = [
    'Active',
    'Inactive',
    'On Leave',
    'Probation',
  ];

  readonly maxDateTime = signal(formatLocalDateTimeInput(new Date()));
  readonly submitting = signal(false);

  readonly form = this.fb.nonNullable.group({
    username: ['', [trimmedRequiredValidator()]],
    firstName: ['', [trimmedRequiredValidator()]],
    lastName: ['', [trimmedRequiredValidator()]],
    email: ['', [trimmedRequiredValidator(), Validators.email]],
    birthDate: ['', [Validators.required, maxTodayValidator()]],
    basicSalary: [
      '',
      [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(0)],
    ],
    status: ['', [Validators.required]],
    group: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  onSubmit(): void {
    this.maxDateTime.set(formatLocalDateTimeInput(new Date()));

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.submitting()) return;

    const raw = this.form.getRawValue();
    this.submitting.set(true);

    this.employeeApi
      .createEmployee({
        username: raw.username.trim(),
        firstName: raw.firstName.trim(),
        lastName: raw.lastName.trim(),
        email: raw.email.trim(),
        birthDate: new Date(raw.birthDate).toISOString(),
        basicSalary: Number(raw.basicSalary),
        status: raw.status as EmployeeStatus,
        group: raw.group,
        description: new Date(raw.description).toISOString(),
      })
      .subscribe({
        next: (created) => {
          this.submitting.set(false);
          this.notification.show('success', `Employee ${created.username} added successfully`);
          void this.router.navigate(['/employees']);
        },
        error: (err: { status?: number; error?: { message?: string } }) => {
          this.submitting.set(false);
          if (err?.status === 409) {
            this.form.controls.username.setErrors({ duplicate: true });
            this.form.controls.username.markAsTouched();
          }
          this.notification.show('danger', err?.error?.message ?? 'Failed to add employee');
        },
      });
  }
}
