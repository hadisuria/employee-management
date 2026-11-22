import { Routes } from '@angular/router';
import { authGuard, guestGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [guestGuard],
    loadComponent: () => import('./features/login/login').then((m) => m.LoginComponent),
  },
  {
    path: 'employees',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/employee-list/employee-list').then((m) => m.EmployeeListComponent),
  },
  {
    path: 'employees/add',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/employee-form/employee-form').then((m) => m.EmployeeFormComponent),
  },
  {
    path: 'employees/:username/edit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/employee-form/employee-form').then((m) => m.EmployeeFormComponent),
  },
  {
    path: 'employees/:username',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/employee-detail/employee-detail').then((m) => m.EmployeeDetailComponent),
  },
  {
    path: '**',
    redirectTo: 'employees',
  },
];
