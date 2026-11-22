export type EmployeeStatus = 'Active' | 'Inactive' | 'On Leave' | 'Probation';

export type EmployeeSortField = 'username' | 'name' | 'email' | 'group' | 'basicSalary' | 'status';

export interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  basicSalary: number;
  status: EmployeeStatus;
  group: string;
  description: string;
}

export interface EmployeeListState {
  searchName: string;
  searchEmail: string;
  searchGroup: string;
  sortField: EmployeeSortField | '';
  sortDirection: 'asc' | 'desc';
  page: number;
  pageSize: number;
}

export interface EmployeeQuery {
  name?: string;
  email?: string;
  group?: string;
  sortField?: EmployeeSortField | '';
  sortDir?: 'asc' | 'desc';
  page: number;
  pageSize: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  username: string;
}
