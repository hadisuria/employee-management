import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotificationService } from '../../../core/state/notification.service';

@Component({
  selector: 'app-toast-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toast-notification.html',
  styleUrl: './toast-notification.scss',
})
export class ToastNotificationComponent {
  readonly notificationService = inject(NotificationService);
}
