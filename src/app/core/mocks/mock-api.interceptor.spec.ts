import { HttpErrorResponse, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { firstValueFrom } from 'rxjs';
import { AuthApiService } from '../api/auth-api.service';
import { EmployeeApiService } from '../api/employee-api.service';
import { DUMMY_GROUPS } from '../data/dummy-groups';
import { Employee } from '../models/employee.model';
import {
  MOCK_API_DELAY_MS,
  mockApiInterceptor,
  resetMockEmployeesDb,
} from './mock-api.interceptor';

describe('mockApiInterceptor', () => {
  let authApi: AuthApiService;
  let employeeApi: EmployeeApiService;

  beforeEach(() => {
    resetMockEmployeesDb();

    TestBed.configureTestingModule({
      providers: [
        { provide: MOCK_API_DELAY_MS, useValue: 0 },
        provideHttpClient(withInterceptors([mockApiInterceptor])),
      ],
    });

    authApi = TestBed.inject(AuthApiService);
    employeeApi = TestBed.inject(EmployeeApiService);
  });

  it('authenticates demo credentials and rejects wrong passwords with 401', async () => {
    const ok = await firstValueFrom(authApi.login({ username: 'admin', password: 'admin123' }));
    expect(ok.username).toBe('admin');
    expect(ok.token).toBeTruthy();

    let caught: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(authApi.login({ username: 'admin', password: 'wrong' }));
    } catch (err) {
      caught = err as HttpErrorResponse;
    }
    expect(caught?.status).toBe(401);
  });

  it('returns all 10 dummy groups', async () => {
    const groups = await firstValueFrom(employeeApi.getGroups());
    expect(groups.length).toBe(10);
    expect(groups).toEqual([...DUMMY_GROUPS]);
  });

  it('supports paging, sorting, and multi-parameter AND filtering', async () => {
    const firstPage = await firstValueFrom(employeeApi.getEmployees({ page: 1, pageSize: 10 }));
    expect(firstPage.total).toBeGreaterThanOrEqual(100);
    expect(firstPage.items.length).toBe(10);

    const filtered = await firstValueFrom(
      employeeApi.getEmployees({
        name: 'budi',
        group: 'Information Technology',
        page: 1,
        pageSize: 25,
      }),
    );
    expect(filtered.items.length).toBeGreaterThan(0);
    for (const item of filtered.items) {
      const matchesName =
        `${item.firstName} ${item.lastName}`.toLowerCase().includes('budi') ||
        item.username.toLowerCase().includes('budi');
      expect(matchesName).toBe(true);
      expect(item.group).toBe('Information Technology');
    }

    const sortedDesc = await firstValueFrom(
      employeeApi.getEmployees({
        sortField: 'basicSalary',
        sortDir: 'desc',
        page: 1,
        pageSize: 10,
      }),
    );
    expect(sortedDesc.items[0].basicSalary).toBeGreaterThanOrEqual(sortedDesc.items[1].basicSalary);
  });

  it('looks up existing employee and returns 404 for unknown username', async () => {
    const found = await firstValueFrom(employeeApi.getEmployeeByUsername('budi.santoso'));
    expect(found.firstName).toBe('Budi');

    let caught: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(employeeApi.getEmployeeByUsername('does.not.exist'));
    } catch (err) {
      caught = err as HttpErrorResponse;
    }
    expect(caught?.status).toBe(404);
  });

  it('creates a new employee and rejects duplicate usernames with 409', async () => {
    const payload: Employee = {
      username: 'new.employee',
      firstName: 'New',
      lastName: 'Employee',
      email: 'new.employee@company.co.id',
      birthDate: '1994-04-10T08:00:00.000Z',
      basicSalary: 14_000_000.5,
      status: 'Active',
      group: 'Finance',
      description: '2026-01-15T09:00:00.000Z',
    };

    const created = await firstValueFrom(employeeApi.createEmployee(payload));
    expect(created.username).toBe('new.employee');

    const afterCreate = await firstValueFrom(employeeApi.getEmployees({ page: 1, pageSize: 10 }));
    expect(afterCreate.total).toBe(121);
    expect(afterCreate.items[0].username).toBe('new.employee');

    let caught: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(employeeApi.createEmployee(payload));
    } catch (err) {
      caught = err as HttpErrorResponse;
    }
    expect(caught?.status).toBe(409);
  });

  it('updates an employee, handles username changes, and rejects conflicts/unknowns', async () => {
    const existing = await firstValueFrom(employeeApi.getEmployeeByUsername('budi.santoso'));
    const updated = await firstValueFrom(
      employeeApi.updateEmployee('budi.santoso', {
        ...existing,
        username: 'budi.updated',
        firstName: 'Budianto',
        basicSalary: 16_500_000.25,
      }),
    );

    expect(updated.username).toBe('budi.updated');
    expect(updated.firstName).toBe('Budianto');
    expect(updated.basicSalary).toBe(16_500_000.25);

    const refetched = await firstValueFrom(employeeApi.getEmployeeByUsername('budi.updated'));
    expect(refetched.firstName).toBe('Budianto');

    let conflictErr: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(
        employeeApi.updateEmployee('budi.updated', { ...updated, username: 'siti.rahmawati' }),
      );
    } catch (err) {
      conflictErr = err as HttpErrorResponse;
    }
    expect(conflictErr?.status).toBe(409);

    let notFoundErr: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(employeeApi.updateEmployee('missing.user', updated));
    } catch (err) {
      notFoundErr = err as HttpErrorResponse;
    }
    expect(notFoundErr?.status).toBe(404);
  });

  it('deletes an employee and returns 404 when missing', async () => {
    const deleted = await firstValueFrom(employeeApi.deleteEmployee('siti.rahmawati'));
    expect(deleted).toEqual({ deleted: true, username: 'siti.rahmawati' });

    const list = await firstValueFrom(employeeApi.getEmployees({ page: 1, pageSize: 10 }));
    expect(list.total).toBe(119);

    let lookupErr: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(employeeApi.getEmployeeByUsername('siti.rahmawati'));
    } catch (err) {
      lookupErr = err as HttpErrorResponse;
    }
    expect(lookupErr?.status).toBe(404);

    let deleteErr: HttpErrorResponse | undefined;
    try {
      await firstValueFrom(employeeApi.deleteEmployee('siti.rahmawati'));
    } catch (err) {
      deleteErr = err as HttpErrorResponse;
    }
    expect(deleteErr?.status).toBe(404);
  });
});
