import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './confirm-dialog.html',
  styleUrl: './confirm-dialog.scss',
})
export class ConfirmDialogComponent {
  readonly open = input(false);
  readonly title = input('Confirm action');
  readonly message = input('');
  readonly confirmLabel = input('Delete');
  readonly cancelLabel = input('Cancel');
  readonly busy = input(false);
  readonly busyLabel = input('Deleting...');

  readonly confirm = output<void>();
  readonly cancel = output<void>();

  onBackdropClick(event: MouseEvent): void {
    if (!this.busy() && event.target === event.currentTarget) {
      this.cancel.emit();
    }
  }

  onCancel(): void {
    if (!this.busy()) {
      this.cancel.emit();
    }
  }

  onConfirm(): void {
    if (!this.busy()) {
      this.confirm.emit();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open() && !this.busy()) {
      this.cancel.emit();
    }
  }
}
