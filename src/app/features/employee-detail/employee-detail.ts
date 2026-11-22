import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { Employee } from '../../core/models/employee.model';
import { NotificationService } from '../../core/state/notification.service';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RupiahPipe } from '../../shared/pipes/rupiah.pipe';

@Component({
  selector: 'app-employee-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, ConfirmDialogComponent, StatusBadgeComponent, RupiahPipe],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.scss',
})
export class EmployeeDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly employeeApi = inject(EmployeeApiService);
  private readonly notification = inject(NotificationService);

  readonly requestedUsername = signal('');
  readonly loading = signal(true);
  readonly employee = signal<Employee | null>(null);
  readonly notFound = signal(false);
  readonly confirmOpen = signal(false);
  readonly deleting = signal(false);

  readonly initials = computed(() => {
    const emp = this.employee();
    if (!emp) return '';
    return `${emp.firstName.charAt(0)}${emp.lastName.charAt(0)}`.toUpperCase();
  });

  constructor() {
    this.route.paramMap
      .pipe(
        map((params) => params.get('username') ?? ''),
        switchMap((username) => {
          this.requestedUsername.set(username);
          this.loading.set(true);
          this.notFound.set(false);
          if (!username) {
            return of(null);
          }
          return this.employeeApi.getEmployeeByUsername(username).pipe(catchError(() => of(null)));
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((result) => {
        this.loading.set(false);
        this.employee.set(result);
        this.notFound.set(result === null);
      });
  }

  openDeleteConfirm(): void {
    this.confirmOpen.set(true);
  }

  cancelDelete(): void {
    if (!this.deleting()) {
      this.confirmOpen.set(false);
    }
  }

  confirmDelete(): void {
    const target = this.employee();
    if (!target || this.deleting()) return;

    this.deleting.set(true);
    this.employeeApi.deleteEmployee(target.username).subscribe({
      next: () => {
        this.deleting.set(false);
        this.confirmOpen.set(false);
        this.notification.show('danger', `Employee ${target.username} deleted`);
        void this.router.navigate(['/employees']);
      },
      error: (err: { error?: { message?: string } }) => {
        this.deleting.set(false);
        this.confirmOpen.set(false);
        this.notification.show('danger', err?.error?.message ?? 'Failed to delete employee');
      },
    });
  }

  goBack(): void {
    void this.router.navigate(['/employees']);
  }
}
