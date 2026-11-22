import { HttpErrorResponse, HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { delay, Observable, of, switchMap, throwError, timer } from 'rxjs';
import { DUMMY_EMPLOYEES } from '../data/dummy-employees';
import { DUMMY_GROUPS } from '../data/dummy-groups';
import {
  Employee,
  EmployeeSortField,
  LoginRequest,
  PaginatedResponse,
} from '../models/employee.model';

export const MOCK_API_DELAY_MS = new InjectionToken<number>('MOCK_API_DELAY_MS', {
  providedIn: 'root',
  factory: () => 200,
});

let employeesDb: Employee[] = [...DUMMY_EMPLOYEES];

export function resetMockEmployeesDb(): void {
  employeesDb = [...DUMMY_EMPLOYEES];
}

function respondOk<T>(body: T, status: number, delayMs: number): Observable<HttpResponse<T>> {
  const response = new HttpResponse<T>({ status, body });
  return delayMs > 0 ? of(response).pipe(delay(delayMs)) : of(response);
}

function respondError(
  status: number,
  statusText: string,
  message: string,
  delayMs: number,
): Observable<never> {
  const createError = () =>
    new HttpErrorResponse({
      status,
      statusText,
      error: { message },
    });

  return delayMs > 0
    ? timer(delayMs).pipe(switchMap(() => throwError(createError)))
    : throwError(createError);
}

function sortEmployees(
  list: Employee[],
  sortField: EmployeeSortField | string,
  sortDir: string,
): Employee[] {
  if (!sortField) return list;

  const multiplier = sortDir === 'desc' ? -1 : 1;
  return [...list].sort((a, b) => {
    if (sortField === 'basicSalary') {
      return (a.basicSalary - b.basicSalary) * multiplier;
    }

    const left =
      sortField === 'name'
        ? `${a.firstName} ${a.lastName}`
        : String(a[sortField as keyof Employee] ?? '');
    const right =
      sortField === 'name'
        ? `${b.firstName} ${b.lastName}`
        : String(b[sortField as keyof Employee] ?? '');

    return left.localeCompare(right, undefined, { sensitivity: 'base' }) * multiplier;
  });
}

export const mockApiInterceptor: HttpInterceptorFn = (req, next) => {
  if (!req.url.startsWith('/api/')) {
    return next(req);
  }

  const delayMs = inject(MOCK_API_DELAY_MS);

  if (req.method === 'POST' && req.url === '/api/auth/login') {
    const body = req.body as Partial<LoginRequest> | null;
    const username = (body?.username ?? '').trim();
    const password = body?.password ?? '';

    if (username === 'admin' && password === 'admin123') {
      return respondOk({ token: 'mock-jwt-token', username }, 200, delayMs);
    }

    return respondError(401, 'Unauthorized', 'Invalid username or password', delayMs);
  }

  if (req.method === 'GET' && req.url === '/api/groups') {
    return respondOk([...DUMMY_GROUPS], 200, Math.min(delayMs, 150));
  }

  if (req.method === 'GET' && req.url === '/api/employees') {
    const nameQuery = (req.params.get('name') ?? '').trim().toLowerCase();
    const emailQuery = (req.params.get('email') ?? '').trim().toLowerCase();
    const groupFilter = (req.params.get('group') ?? '').trim();
    const sortField = req.params.get('sortField') ?? '';
    const sortDir = req.params.get('sortDir') === 'desc' ? 'desc' : 'asc';
    const rawPage = Number(req.params.get('page') ?? 1);
    const rawPageSize = Number(req.params.get('pageSize') ?? 10);
    const pageSize = rawPageSize > 0 ? rawPageSize : 10;

    const filtered = employeesDb.filter((emp) => {
      const fullName = `${emp.firstName} ${emp.lastName}`.toLowerCase();
      const matchesName =
        !nameQuery ||
        fullName.includes(nameQuery) ||
        emp.username.toLowerCase().includes(nameQuery);
      const matchesEmail = !emailQuery || emp.email.toLowerCase().includes(emailQuery);
      const matchesGroup = !groupFilter || emp.group === groupFilter;

      return matchesName && matchesEmail && matchesGroup;
    });

    const sorted = sortEmployees(filtered, sortField, sortDir);
    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const page = Math.min(Math.max(1, rawPage || 1), totalPages);
    const startIndex = (page - 1) * pageSize;
    const items = sorted.slice(startIndex, startIndex + pageSize);

    const payload: PaginatedResponse<Employee> = {
      items,
      total,
      page,
      pageSize,
    };
    return respondOk(payload, 200, delayMs);
  }

  if (req.method === 'GET' && req.url.startsWith('/api/employees/')) {
    const requested = decodeURIComponent(req.url.slice('/api/employees/'.length)).toLowerCase();
    const match = employeesDb.find((emp) => emp.username.toLowerCase() === requested);

    if (!match) {
      return respondError(404, 'Not Found', 'Employee not found', delayMs);
    }

    return respondOk(match, 200, delayMs);
  }

  if (req.method === 'POST' && req.url === '/api/employees') {
    const payload = req.body as Employee;
    const normalizedUsername = payload.username.trim();
    const duplicate = employeesDb.some(
      (emp) => emp.username.toLowerCase() === normalizedUsername.toLowerCase(),
    );

    if (duplicate) {
      return respondError(409, 'Conflict', 'Username already exists', delayMs);
    }

    const created: Employee = {
      ...payload,
      username: normalizedUsername,
      firstName: payload.firstName.trim(),
      lastName: payload.lastName.trim(),
      email: payload.email.trim(),
    };
    employeesDb = [created, ...employeesDb];

    return respondOk(created, 201, delayMs);
  }

  return next(req);
};
