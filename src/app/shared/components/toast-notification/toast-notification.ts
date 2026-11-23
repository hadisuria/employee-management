import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationService } from '../../../core/state/notification.service';

@Component({
  selector: 'app-toast-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './toast-notification.html',
  styleUrl: './toast-notification.scss',
})
export class ToastNotificationComponent {
  readonly notificationService = inject(NotificationService);
}
