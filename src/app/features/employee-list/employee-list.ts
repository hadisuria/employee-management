import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { catchError, debounceTime, finalize, map, merge, of, Subject, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { Employee, EmployeeSortField } from '../../core/models/employee.model';
import { EmployeeListStateService } from '../../core/state/employee-list-state.service';
import { NotificationService } from '../../core/state/notification.service';
import { ViewportService } from '../../core/state/viewport.service';
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../shared/components/confirm-dialog/confirm-dialog';
import { SearchableSelectComponent } from '../../shared/components/searchable-select/searchable-select';
import { StatusBadgeComponent } from '../../shared/components/status-badge/status-badge';
import { RupiahPipe } from '../../shared/pipes/rupiah.pipe';

type FilterField = 'searchName' | 'searchEmail';

interface MobileSortOption {
  label: string;
  value: string;
  field: EmployeeSortField | '';
  direction: 'asc' | 'desc';
}

const MOBILE_SORT_OPTIONS: readonly MobileSortOption[] = [
  { label: 'Default order', value: '', field: '', direction: 'asc' },
  { label: 'Name (A–Z)', value: 'name:asc', field: 'name', direction: 'asc' },
  { label: 'Name (Z–A)', value: 'name:desc', field: 'name', direction: 'desc' },
  { label: 'Username (A–Z)', value: 'username:asc', field: 'username', direction: 'asc' },
  {
    label: 'Salary (High–Low)',
    value: 'basicSalary:desc',
    field: 'basicSalary',
    direction: 'desc',
  },
  {
    label: 'Salary (Low–High)',
    value: 'basicSalary:asc',
    field: 'basicSalary',
    direction: 'asc',
  },
  { label: 'Group (A–Z)', value: 'group:asc', field: 'group', direction: 'asc' },
  { label: 'Status (A–Z)', value: 'status:asc', field: 'status', direction: 'asc' },
];

@Component({
  selector: 'app-employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatTooltipModule,
    SearchableSelectComponent,
    StatusBadgeComponent,
    RupiahPipe,
  ],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeListComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly employeeApi = inject(EmployeeApiService);
  private readonly notification = inject(NotificationService);
  private readonly dialog = inject(MatDialog);
  readonly listState = inject(EmployeeListStateService);
  readonly viewport = inject(ViewportService);

  private readonly filterInput$ = new Subject<{ field: FilterField; value: string }>();
  private readonly reload$ = new Subject<void>();

  readonly nameInput = signal(this.listState.state().searchName);
  readonly emailInput = signal(this.listState.state().searchEmail);
  readonly employees = signal<Employee[]>([]);
  readonly total = signal(0);
  readonly loading = signal(true);
  readonly deleting = signal(false);

  readonly groups = toSignal(this.employeeApi.getGroups().pipe(catchError(() => of([]))), {
    initialValue: [] as string[],
  });

  readonly displayedColumns = [
    'username',
    'name',
    'email',
    'group',
    'basicSalary',
    'status',
    'actions',
  ];
  readonly pageSizeOptions = [10, 25, 50, 100];
  readonly mobileSortOptions = MOBILE_SORT_OPTIONS;
  readonly state = this.listState.state;

  readonly hasActiveFilters = computed(() => {
    const s = this.state();
    return Boolean(s.searchName || s.searchEmail || s.searchGroup);
  });

  readonly currentSortValue = computed(() => {
    const s = this.state();
    return s.sortField ? `${s.sortField}:${s.sortDirection}` : '';
  });

  constructor() {
    this.filterInput$
      .pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef))
      .subscribe(({ field, value }) => {
        this.listState.updateFilters({ [field]: value });
      });

    merge(toObservable(this.listState.state), this.reload$.pipe(map(() => this.state())))
      .pipe(
        switchMap((s) => {
          this.loading.set(true);
          return this.employeeApi
            .getEmployees({
              name: s.searchName,
              email: s.searchEmail,
              group: s.searchGroup,
              sortField: s.sortField,
              sortDir: s.sortDirection,
              page: s.page,
              pageSize: s.pageSize,
            })
            .pipe(
              catchError(() =>
                of({ items: [] as Employee[], total: 0, page: 1, pageSize: s.pageSize }),
              ),
              finalize(() => this.loading.set(false)),
            );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((res) => {
        this.employees.set(res.items);
        this.total.set(res.total);
        if (res.page !== this.state().page) {
          this.listState.setPage(res.page);
        }
      });
  }

  onTextFilter(field: FilterField, event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (field === 'searchName') {
      this.nameInput.set(value);
    } else {
      this.emailInput.set(value);
    }
    this.filterInput$.next({ field, value });
  }

  onGroupFilterChange(group: string): void {
    this.listState.updateFilters({ searchGroup: group });
  }

  onResetFilters(): void {
    this.nameInput.set('');
    this.emailInput.set('');
    this.listState.resetFilters();
  }

  onMatSortChange(sort: Sort): void {
    if (!sort.direction) {
      this.listState.setSort('', 'asc');
      return;
    }
    this.listState.setSort(sort.active as EmployeeSortField, sort.direction);
  }

  onMobileSortChange(selectedValue: string): void {
    const match = MOBILE_SORT_OPTIONS.find((opt) => opt.value === selectedValue);
    if (match) {
      this.listState.setSort(match.field, match.direction);
    }
  }

  onPageChange(event: PageEvent): void {
    if (event.pageSize !== this.state().pageSize) {
      this.listState.setPageSize(event.pageSize);
      return;
    }
    this.listState.setPage(event.pageIndex + 1);
  }

  openDetail(username: string): void {
    void this.router.navigate(['/employees', username]);
  }

  onEdit(event: Event, employee: Employee): void {
    event.stopPropagation();
    void this.router.navigate(['/employees', employee.username, 'edit']);
  }

  onDelete(event: Event, employee: Employee): void {
    event.stopPropagation();
    if (this.deleting()) return;

    const data: ConfirmDialogData = {
      title: 'Delete employee',
      message: `Delete ${employee.firstName} ${employee.lastName} (${employee.username})? This removes the record from the current session.`,
      confirmLabel: 'Delete',
      cancelLabel: 'Cancel',
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '420px',
      data,
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((confirmed) => {
        if (confirmed) {
          this.executeDelete(employee);
        }
      });
  }

  private executeDelete(target: Employee): void {
    this.deleting.set(true);
    this.employeeApi.deleteEmployee(target.username).subscribe({
      next: () => {
        this.deleting.set(false);
        this.notification.show('danger', `Employee ${target.username} deleted`);
        this.reload$.next();
      },
      error: (err: { error?: { message?: string } }) => {
        this.deleting.set(false);
        this.notification.show('danger', err?.error?.message ?? 'Failed to delete employee');
        this.reload$.next();
      },
    });
  }
}
