import { Injectable, signal } from '@angular/core';
import { EmployeeListState, EmployeeSortField } from '../models/employee.model';

const DEFAULT_LIST_STATE: EmployeeListState = {
  searchName: '',
  searchEmail: '',
  searchGroup: '',
  sortField: '',
  sortDirection: 'asc',
  page: 1,
  pageSize: 10,
};

@Injectable({ providedIn: 'root' })
export class EmployeeListStateService {
  private readonly stateSignal = signal<EmployeeListState>({ ...DEFAULT_LIST_STATE });
  private readonly showSalarySignal = signal(true);

  readonly state = this.stateSignal.asReadonly();
  readonly showSalary = this.showSalarySignal.asReadonly();

  updateFilters(
    partial: Partial<Pick<EmployeeListState, 'searchName' | 'searchEmail' | 'searchGroup'>>,
  ): void {
    this.stateSignal.update((current) => ({
      ...current,
      ...partial,
      page: 1,
    }));
  }

  toggleSort(field: EmployeeSortField): void {
    this.stateSignal.update((current) => {
      if (current.sortField !== field) {
        return {
          ...current,
          sortField: field,
          sortDirection: 'asc',
          page: 1,
        };
      }

      if (current.sortDirection === 'asc') {
        return {
          ...current,
          sortField: field,
          sortDirection: 'desc',
          page: 1,
        };
      }

      return {
        ...current,
        sortField: '',
        sortDirection: 'asc',
        page: 1,
      };
    });
  }

  setSort(sortField: EmployeeSortField | '', sortDirection: 'asc' | 'desc'): void {
    this.stateSignal.update((current) => ({
      ...current,
      sortField,
      sortDirection,
      page: 1,
    }));
  }

  setPage(page: number): void {
    this.stateSignal.update((current) => ({
      ...current,
      page: Math.max(1, page),
    }));
  }

  setPageSize(pageSize: number): void {
    this.stateSignal.update((current) => ({
      ...current,
      pageSize,
      page: 1,
    }));
  }

  toggleSalaryVisibility(): void {
    this.showSalarySignal.update((visible) => !visible);
  }

  resetFilters(): void {
    this.stateSignal.update((current) => ({
      ...current,
      searchName: '',
      searchEmail: '',
      searchGroup: '',
      page: 1,
    }));
  }

  resetAll(): void {
    this.stateSignal.set({ ...DEFAULT_LIST_STATE });
    this.showSalarySignal.set(true);
  }
}
