import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { Employee, EmployeeStatus } from '../../core/models/employee.model';
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
  selector: 'app-employee-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink, SearchableSelectComponent],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
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

  readonly isEditMode = signal(false);
  readonly requestedUsername = signal('');
  readonly originalUsername = signal('');
  readonly loading = signal(false);
  readonly notFound = signal(false);
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

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('username')),
        switchMap((username) => {
          this.notFound.set(false);
          if (!username) {
            this.isEditMode.set(false);
            this.requestedUsername.set('');
            this.originalUsername.set('');
            this.loading.set(false);
            this.form.reset();
            return of<Employee | null | 'create'>('create');
          }

          this.isEditMode.set(true);
          this.requestedUsername.set(username);
          this.loading.set(true);
          return this.employeeApi.getEmployeeByUsername(username).pipe(catchError(() => of(null)));
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((result) => {
        if (result === 'create') return;

        this.loading.set(false);
        if (!result) {
          this.notFound.set(true);
          return;
        }

        this.originalUsername.set(result.username);
        this.form.reset({
          username: result.username,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          birthDate: formatLocalDateTimeInput(new Date(result.birthDate)),
          basicSalary: String(result.basicSalary),
          status: result.status,
          group: result.group,
          description: formatLocalDateTimeInput(new Date(result.description)),
        });
      });
  }

  onSubmit(): void {
    this.maxDateTime.set(formatLocalDateTimeInput(new Date()));

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.submitting()) return;

    const raw = this.form.getRawValue();
    const payload: Employee = {
      username: raw.username.trim(),
      firstName: raw.firstName.trim(),
      lastName: raw.lastName.trim(),
      email: raw.email.trim(),
      birthDate: new Date(raw.birthDate).toISOString(),
      basicSalary: Number(raw.basicSalary),
      status: raw.status as EmployeeStatus,
      group: raw.group,
      description: new Date(raw.description).toISOString(),
    };

    this.submitting.set(true);

    const request$ = this.isEditMode()
      ? this.employeeApi.updateEmployee(this.originalUsername(), payload)
      : this.employeeApi.createEmployee(payload);

    request$.subscribe({
      next: (saved) => {
        this.submitting.set(false);
        if (this.isEditMode()) {
          this.notification.show('warning', `Employee ${saved.username} updated successfully`);
        } else {
          this.notification.show('success', `Employee ${saved.username} added successfully`);
        }
        void this.router.navigate(['/employees']);
      },
      error: (err: { status?: number; error?: { message?: string } }) => {
        this.submitting.set(false);
        if (err?.status === 409) {
          this.form.controls.username.setErrors({ duplicate: true });
          this.form.controls.username.markAsTouched();
        }
        this.notification.show(
          'danger',
          err?.error?.message ??
            (this.isEditMode() ? 'Failed to update employee' : 'Failed to add employee'),
        );
      },
    });
  }
}
