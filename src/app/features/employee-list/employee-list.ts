import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { catchError, debounceTime, finalize, of, Subject, switchMap } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import { Employee, EmployeeSortField } from '../../core/models/employee.model';
import { EmployeeListStateService } from '../../core/state/employee-list-state.service';
import { NotificationService } from '../../core/state/notification.service';
import { ViewportService } from '../../core/state/viewport.service';
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
  imports: [RouterLink, SearchableSelectComponent, StatusBadgeComponent, RupiahPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.scss',
})
export class EmployeeListComponent {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly employeeApi = inject(EmployeeApiService);
  private readonly notification = inject(NotificationService);
  readonly listState = inject(EmployeeListStateService);
  readonly viewport = inject(ViewportService);

  private readonly filterInput$ = new Subject<{ field: FilterField; value: string }>();

  readonly nameInput = signal(this.listState.state().searchName);
  readonly emailInput = signal(this.listState.state().searchEmail);
  readonly employees = signal<Employee[]>([]);
  readonly total = signal(0);
  readonly loading = signal(true);

  readonly groups = toSignal(this.employeeApi.getGroups().pipe(catchError(() => of([]))), {
    initialValue: [] as string[],
  });

  readonly pageSizeOptions = [10, 25, 50, 100] as const;
  readonly mobileSortOptions = MOBILE_SORT_OPTIONS;
  readonly state = this.listState.state;

  readonly hasActiveFilters = computed(() => {
    const s = this.state();
    return Boolean(s.searchName || s.searchEmail || s.searchGroup);
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.total() / this.state().pageSize)),
  );

  readonly currentSortValue = computed(() => {
    const s = this.state();
    return s.sortField ? `${s.sortField}:${s.sortDirection}` : '';
  });

  readonly rangeStart = computed(() => {
    const total = this.total();
    if (total === 0) return 0;
    return (this.state().page - 1) * this.state().pageSize + 1;
  });

  readonly rangeEnd = computed(() => {
    const total = this.total();
    if (total === 0) return 0;
    return Math.min(total, this.state().page * this.state().pageSize);
  });

  readonly paginationItems = computed<(number | 'ellipsis')[]>(() => {
    const total = this.totalPages();
    const current = this.state().page;

    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const pages: (number | 'ellipsis')[] = [1];
    const start = Math.max(2, current - 1);
    const end = Math.min(total - 1, current + 1);

    if (start > 2) pages.push('ellipsis');
    for (let p = start; p <= end; p++) pages.push(p);
    if (end < total - 1) pages.push('ellipsis');
    pages.push(total);

    return pages;
  });

  constructor() {
    this.filterInput$
      .pipe(debounceTime(200), takeUntilDestroyed(this.destroyRef))
      .subscribe(({ field, value }) => {
        this.listState.updateFilters({ [field]: value });
      });

    toObservable(this.listState.state)
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

  onSortColumn(field: EmployeeSortField): void {
    this.listState.toggleSort(field);
  }

  onMobileSortChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const match = MOBILE_SORT_OPTIONS.find((opt) => opt.value === selectedValue);
    if (match) {
      this.listState.setSort(match.field, match.direction);
    }
  }

  onPageSizeChange(event: Event): void {
    const size = Number((event.target as HTMLSelectElement).value);
    if (size > 0) {
      this.listState.setPageSize(size);
    }
  }

  goToPage(page: number): void {
    const target = Math.min(Math.max(1, page), this.totalPages());
    if (target !== this.state().page) {
      this.listState.setPage(target);
    }
  }

  openDetail(username: string): void {
    void this.router.navigate(['/employees', username]);
  }

  onEdit(event: Event, employee: Employee): void {
    event.stopPropagation();
    this.notification.show('warning', `Edit action triggered for ${employee.username}`);
  }

  onDelete(event: Event, employee: Employee): void {
    event.stopPropagation();
    this.notification.show('danger', `Delete action triggered for ${employee.username}`);
  }
}
