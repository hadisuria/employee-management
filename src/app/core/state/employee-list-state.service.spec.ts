import { TestBed } from '@angular/core/testing';
import { EmployeeListStateService } from './employee-list-state.service';

describe('EmployeeListStateService', () => {
  let service: EmployeeListStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeListStateService);
    service.resetAll();
  });

  it('resets page to 1 when search filters change', () => {
    service.setPage(4);
    expect(service.state().page).toBe(4);

    service.updateFilters({ searchName: 'siti' });
    expect(service.state().searchName).toBe('siti');
    expect(service.state().page).toBe(1);
  });

  it('toggles sort direction on repeated column clicks and resets page', () => {
    service.setPage(3);
    service.toggleSort('basicSalary');
    expect(service.state().sortField).toBe('basicSalary');
    expect(service.state().sortDirection).toBe('asc');
    expect(service.state().page).toBe(1);

    service.toggleSort('basicSalary');
    expect(service.state().sortDirection).toBe('desc');
  });

  it('resets search filters while keeping pageSize and sorting', () => {
    service.setPageSize(25);
    service.toggleSort('name');
    service.updateFilters({ searchName: 'andi', searchGroup: 'Finance' });

    service.resetFilters();
    expect(service.state().searchName).toBe('');
    expect(service.state().searchGroup).toBe('');
    expect(service.state().pageSize).toBe(25);
    expect(service.state().sortField).toBe('name');
  });
});
