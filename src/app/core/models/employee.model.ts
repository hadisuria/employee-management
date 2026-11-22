export interface Employee {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

export interface EmployeeListState {
  searchName: string;
  searchEmail: string;
  searchGroup: string;
  sortField: keyof Employee | '';
  sortDirection: 'asc' | 'desc';
  page: number;
  pageSize: number;
}
