import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthStateService } from './core/state/auth-state.service';
import { ThemeService } from './core/state/theme.service';
import { NavbarComponent } from './shared/components/navbar/navbar';
import { ToastNotificationComponent } from './shared/components/toast-notification/toast-notification';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, NavbarComponent, ToastNotificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly _theme = inject(ThemeService);
  readonly authState = inject(AuthStateService);
}
