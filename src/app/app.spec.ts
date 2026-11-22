import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { App } from './app';
import { AuthStateService } from './core/state/auth-state.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([]), provideHttpClient()],
    }).compileComponents();

    TestBed.inject(AuthStateService).logout();
  });

  it('creates the app shell', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('hides navbar when logged out and shows it when authenticated', async () => {
    const authState = TestBed.inject(AuthStateService);
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-navbar')).toBeNull();

    authState.setSession('token', 'admin');
    fixture.detectChanges();
    await fixture.whenStable();
    expect(compiled.querySelector('app-navbar')).not.toBeNull();
  });
});
