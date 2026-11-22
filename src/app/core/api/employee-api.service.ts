import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Employee, EmployeeQuery, PaginatedResponse } from '../models/employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeeApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.apiBaseUrl;

  getEmployees(query: EmployeeQuery): Observable<PaginatedResponse<Employee>> {
    let params = new HttpParams()
      .set('page', String(query.page))
      .set('pageSize', String(query.pageSize));

    if (query.name) params = params.set('name', query.name);
    if (query.email) params = params.set('email', query.email);
    if (query.group) params = params.set('group', query.group);
    if (query.sortField) {
      params = params.set('sortField', query.sortField);
      params = params.set('sortDir', query.sortDir ?? 'asc');
    }

    return this.http.get<PaginatedResponse<Employee>>(`${this.baseUrl}/employees`, { params });
  }

  getEmployeeByUsername(username: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/employees/${encodeURIComponent(username)}`);
  }

  createEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, payload);
  }

  updateEmployee(username: string, payload: Employee): Observable<Employee> {
    return this.http.put<Employee>(
      `${this.baseUrl}/employees/${encodeURIComponent(username)}`,
      payload,
    );
  }

  deleteEmployee(username: string): Observable<{ deleted: boolean; username: string }> {
    return this.http.delete<{ deleted: boolean; username: string }>(
      `${this.baseUrl}/employees/${encodeURIComponent(username)}`,
    );
  }

  getGroups(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/groups`);
  }
}
