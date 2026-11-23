import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AuthApiService } from '../../core/api/auth-api.service';
import { AuthStateService } from '../../core/state/auth-state.service';
import { ThemeService } from '../../core/state/theme.service';
import { trimmedRequiredValidator } from '../../shared/validators/date.validators';

@Component({
  selector: 'app-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authApi = inject(AuthApiService);
  private readonly authState = inject(AuthStateService);
  private readonly router = inject(Router);
  readonly theme = inject(ThemeService);

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
