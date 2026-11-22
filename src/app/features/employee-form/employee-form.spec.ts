import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter, Router, RouterOutlet } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { EmployeeApiService } from '../../core/api/employee-api.service';
import {
  MOCK_API_DELAY_MS,
  mockApiInterceptor,
  resetMockEmployeesDb,
} from '../../core/mocks/mock-api.interceptor';
import { NotificationService } from '../../core/state/notification.service';
import { EmployeeFormComponent } from './employee-form';

@Component({
  imports: [RouterOutlet],
  template: '<router-outlet />',
})
class RouterHostComponent {}

@Component({ template: '<p>Employees</p>' })
class DummyPageComponent {}

describe('EmployeeFormComponent', () => {
  let router: Router;
  let notification: NotificationService;
  let employeeApi: EmployeeApiService;

  beforeEach(async () => {
    resetMockEmployeesDb();

    await TestBed.configureTestingModule({
      imports: [RouterHostComponent],
      providers: [
        { provide: MOCK_API_DELAY_MS, useValue: 0 },
        provideHttpClient(withInterceptors([mockApiInterceptor])),
        provideRouter([
          { path: 'employees', component: DummyPageComponent },
          { path: 'employees/add', component: EmployeeFormComponent },
          { path: 'employees/:username/edit', component: EmployeeFormComponent },
          { path: 'employees/:username', component: DummyPageComponent },
        ]),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
    notification = TestBed.inject(NotificationService);
    employeeApi = TestBed.inject(EmployeeApiService);
  });

  it('creates an employee on /employees/add and shows a success toast', async () => {
    const fixture = TestBed.createComponent(RouterHostComponent);
    await router.navigateByUrl('/employees/add');
    fixture.detectChanges();
    await fixture.whenStable();

    const formComp = fixture.debugElement.query(By.directive(EmployeeFormComponent))
      .componentInstance as EmployeeFormComponent;
    expect(formComp.isEditMode()).toBe(false);

    formComp.form.setValue({
      username: 'ratna.sari',
      firstName: 'Ratna',
      lastName: 'Sari',
      email: 'ratna.sari@company.co.id',
      birthDate: '1993-04-12T08:30',
      basicSalary: '14500000.50',
      status: 'Active',
      group: 'Finance',
      description: '2026-11-20T09:00',
    });

    formComp.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(router.url).toBe('/employees');
    expect(notification.toasts()[0]?.type).toBe('success');

    const saved = await firstValueFrom(employeeApi.getEmployeeByUsername('ratna.sari'));
    expect(saved.firstName).toBe('Ratna');
  });

  it('pre-fills and updates an existing employee on /employees/:username/edit', async () => {
    const fixture = TestBed.createComponent(RouterHostComponent);
    await router.navigateByUrl('/employees/budi.santoso/edit');
    fixture.detectChanges();
    await fixture.whenStable();

    const formComp = fixture.debugElement.query(By.directive(EmployeeFormComponent))
      .componentInstance as EmployeeFormComponent;
    expect(formComp.isEditMode()).toBe(true);
    expect(formComp.form.controls.firstName.value).toBe('Budi');
    expect(formComp.form.controls.basicSalary.value).toBe('15750000.5');

    formComp.form.controls.firstName.setValue('Budianto');
    formComp.form.controls.basicSalary.setValue('16250000.75');
    formComp.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(router.url).toBe('/employees');
    expect(notification.toasts()[0]?.type).toBe('warning');

    const updated = await firstValueFrom(employeeApi.getEmployeeByUsername('budi.santoso'));
    expect(updated.firstName).toBe('Budianto');
    expect(updated.basicSalary).toBe(16_250_000.75);
  });

  it('renders not-found fallback in edit mode for an unknown username', async () => {
    const fixture = TestBed.createComponent(RouterHostComponent);
    await router.navigateByUrl('/employees/unknown.user/edit');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Employee not found');
  });
});
