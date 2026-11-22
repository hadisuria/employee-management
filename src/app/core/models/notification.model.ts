export type NotificationType = 'warning' | 'danger' | 'success';

export interface ToastNotification {
  id: number;
  type: NotificationType;
  message: string;
}
