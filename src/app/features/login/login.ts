import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthApiService } from '../../core/api/auth-api.service';
import { AuthStateService } from '../../core/state/auth-state.service';
import { trimmedRequiredValidator } from '../../shared/validators/date.validators';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);

  readonly showPassword = signal(false);
  readonly submitting = signal(false);
  readonly authError = signal('');

  readonly form = this.fb.nonNullable.group({
    username: ['', [trimmedRequiredValidator()]],
    password: ['', [Validators.required]],
  });

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  onSubmit(): void {
    this.authError.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.submitting()) return;

    const { username, password } = this.form.getRawValue();
    this.submitting.set(true);

    this.authApi.login({ username: username.trim(), password }).subscribe({
      next: (res) => {
        this.authState.setSession(res.token, res.username);
        this.submitting.set(false);
        void this.router.navigate(['/employees']);
      },
      error: (err: { error?: { message?: string } }) => {
        this.authError.set(err?.error?.message ?? 'Invalid username or password');
        this.submitting.set(false);
      },
    });
  }
}
