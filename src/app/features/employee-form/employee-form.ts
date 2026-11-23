import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { Employee, EmployeeStatus } from '../../core/models/employee.model';
import { NotificationService } from '../../core/state/notification.service';
import { SearchableSelectComponent } from '../../shared/components/searchable-select/searchable-select';
import {
  getMaxBirthDate,
  MIN_EMPLOYEE_AGE,
  maxTodayValidator,
  minAgeValidator,
  trimmedRequiredValidator,
} from '../../shared/validators/date.validators';

function pad2(n: number): string {
  return String(n).padStart(2, '0');
}

function parseDateOnly(raw: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec((raw ?? '').trim());
  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }
  const parsed = new Date(raw);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatDateOnly(date: Date): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}

@Component({
  selector: 'app-employee-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [provideNativeDateAdapter()],
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    SearchableSelectComponent,
  ],
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

  readonly minAge = MIN_EMPLOYEE_AGE;
  readonly maxBirthDate = getMaxBirthDate(MIN_EMPLOYEE_AGE);
  readonly isEditMode = signal(false);
  readonly requestedUsername = signal('');
  readonly originalUsername = signal('');
  readonly loading = signal(false);
  readonly notFound = signal(false);
  readonly submitting = signal(false);

  readonly form = this.fb.group({
    username: this.fb.nonNullable.control('', [trimmedRequiredValidator()]),
    firstName: this.fb.nonNullable.control('', [trimmedRequiredValidator()]),
    lastName: this.fb.nonNullable.control('', [trimmedRequiredValidator()]),
    email: this.fb.nonNullable.control('', [trimmedRequiredValidator(), Validators.email]),
    birthDate: this.fb.control<Date | null>(null, [
      Validators.required,
      maxTodayValidator(),
      minAgeValidator(MIN_EMPLOYEE_AGE),
    ]),
    basicSalary: this.fb.nonNullable.control('', [
      Validators.required,
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
      Validators.min(0),
    ]),
    status: this.fb.nonNullable.control('', [Validators.required]),
    group: this.fb.nonNullable.control('', [Validators.required]),
    description: this.fb.nonNullable.control(''),
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
          birthDate: parseDateOnly(result.birthDate),
          basicSalary: String(result.basicSalary),
          status: result.status,
          group: result.group,
          description: result.description ?? '',
        });
      });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.submitting()) return;

    const raw = this.form.getRawValue();
    if (!raw.birthDate) {
      this.form.controls.birthDate.markAsTouched();
      return;
    }

    const payload: Employee = {
      username: raw.username.trim(),
      firstName: raw.firstName.trim(),
      lastName: raw.lastName.trim(),
      email: raw.email.trim(),
      birthDate: formatDateOnly(raw.birthDate),
      basicSalary: Number(raw.basicSalary),
      status: raw.status as EmployeeStatus,
      group: raw.group,
      description: raw.description.trim(),
    };

    this.submitting.set(true);

    const request$ = this.isEditMode()
      ? this.employeeApi.updateEmployee(this.originalUsername(), payload)
      : this.employeeApi.createEmployee(payload);

    request$.subscribe({
      next: (saved) => {
        this.submitting.set(false);
        if (this.isEditMode()) {
          this.notification.show('warning', `Employee ${saved.username} updated`);
        } else {
          this.notification.show('success', `Employee ${saved.username} added`);
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
