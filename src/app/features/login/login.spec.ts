import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { MOCK_API_DELAY_MS, mockApiInterceptor } from '../../core/mocks/mock-api.interceptor';
import { AuthStateService } from '../../core/state/auth-state.service';
import { LoginComponent } from './login';

@Component({ template: '<p>Employees</p>' })
class DummyEmployeesComponent {}

describe('LoginComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: MOCK_API_DELAY_MS, useValue: 0 },
        provideHttpClient(withInterceptors([mockApiInterceptor])),
        provideRouter([{ path: 'employees', component: DummyEmployeesComponent }]),
      ],
    }).compileComponents();

    TestBed.inject(AuthStateService).logout();
  });

  it('shows required field errors on empty submit', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    const formEl = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    formEl.dispatchEvent(new Event('submit'));
    fixture.detectChanges();
    await fixture.whenStable();

    const errors = Array.from(fixture.nativeElement.querySelectorAll('.field-error')).map((el) =>
      (el as HTMLElement).textContent?.trim(),
    );
    expect(errors).toEqual(['Username is required', 'Password is required']);
  });

  it('shows invalid credentials alert on 401 and navigates on valid login', async () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const component = fixture.componentInstance;
    const router = TestBed.inject(Router);
    const authState = TestBed.inject(AuthStateService);
    fixture.detectChanges();

    component.form.setValue({ username: 'admin', password: 'wrong' });
    component.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.nativeElement.querySelector('.alert-error')?.textContent).toContain(
      'Invalid username or password',
    );
    expect(authState.isAuthenticated()).toBe(false);

    component.form.setValue({ username: 'admin', password: 'admin123' });
    component.onSubmit();
    fixture.detectChanges();
    await fixture.whenStable();

    expect(authState.isAuthenticated()).toBe(true);
    expect(router.url).toBe('/employees');
  });
});
