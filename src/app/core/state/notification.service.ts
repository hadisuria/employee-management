import { Injectable, signal } from '@angular/core';
import { NotificationType, ToastNotification } from '../models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly toastsSignal = signal<ToastNotification[]>([]);
  private readonly timers = new Map<number, ReturnType<typeof setTimeout>>();
  private nextId = 1;

  readonly toasts = this.toastsSignal.asReadonly();

  show(type: NotificationType, message: string, durationMs = 4000): void {
    const id = this.nextId++;
    this.toastsSignal.update((current) => [...current, { id, type, message }]);

    if (durationMs > 0) {
      const timer = setTimeout(() => this.dismiss(id), durationMs);
      this.timers.set(id, timer);
    }
  }

  dismiss(id: number): void {
    const timer = this.timers.get(id);
    if (timer) {
      clearTimeout(timer);
      this.timers.delete(id);
    }

    this.toastsSignal.update((current) => current.filter((item) => item.id !== id));
  }
}
