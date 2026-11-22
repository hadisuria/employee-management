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

  readonly state = this.stateSignal.asReadonly();

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
      const nextDirection =
        current.sortField === field && current.sortDirection === 'asc' ? 'desc' : 'asc';

      return {
        ...current,
        sortField: field,
        sortDirection: nextDirection,
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
  }
}
