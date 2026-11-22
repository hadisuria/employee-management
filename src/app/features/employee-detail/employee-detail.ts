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
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RupiahPipe } from '../../shared/pipes/rupiah.pipe';

@Component({
  selector: 'app-employee-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, RouterLink, StatusBadgeComponent, RupiahPipe],
  templateUrl: './employee-detail.html',
  styleUrl: './employee-detail.scss',
})
export class EmployeeDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly employeeApi = inject(EmployeeApiService);

  readonly requestedUsername = signal('');
  readonly loading = signal(true);
  readonly employee = signal<Employee | null>(null);
  readonly notFound = signal(false);

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

  goBack(): void {
    void this.router.navigate(['/employees']);
  }
}
