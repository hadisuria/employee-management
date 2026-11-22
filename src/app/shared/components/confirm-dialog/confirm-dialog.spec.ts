import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ConfirmDialogComponent } from './confirm-dialog';

@Component({
  imports: [ConfirmDialogComponent],
  template: `
    <app-confirm-dialog
      [open]="open()"
      [title]="title()"
      [message]="message()"
      [busy]="busy()"
      (cancel)="cancelled = cancelled + 1"
      (confirm)="confirmed = confirmed + 1"
    />
  `,
})
class DialogHostComponent {
  readonly open = signal(false);
  readonly title = signal('Delete employee');
  readonly message = signal('Remove budi.santoso from the session?');
  readonly busy = signal(false);
  cancelled = 0;
  confirmed = 0;
}

describe('ConfirmDialogComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogHostComponent],
    }).compileComponents();
  });

  it('renders only when open and emits confirm or cancel events', async () => {
    const fixture = TestBed.createComponent(DialogHostComponent);
    const host = fixture.componentInstance;
    const el = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();
    await fixture.whenStable();
    expect(el.querySelector('[role="dialog"]')).toBeNull();

    host.open.set(true);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(el.querySelector('.dialog-title')?.textContent?.trim()).toBe('Delete employee');
    expect(el.querySelector('.dialog-message')?.textContent?.trim()).toBe(
      'Remove budi.santoso from the session?',
    );

    (el.querySelector('.btn-outline') as HTMLButtonElement).click();
    expect(host.cancelled).toBe(1);

    (el.querySelector('.btn-danger-solid') as HTMLButtonElement).click();
    expect(host.confirmed).toBe(1);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(host.cancelled).toBe(2);
  });

  it('disables buttons and ignores escape while busy', async () => {
    const fixture = TestBed.createComponent(DialogHostComponent);
    const host = fixture.componentInstance;
    host.open.set(true);
    host.busy.set(true);
    fixture.detectChanges();
    await fixture.whenStable();

    const el = fixture.nativeElement as HTMLElement;
    const cancelBtn = el.querySelector('.btn-outline') as HTMLButtonElement;
    const confirmBtn = el.querySelector('.btn-danger-solid') as HTMLButtonElement;

    expect(cancelBtn.disabled).toBe(true);
    expect(confirmBtn.disabled).toBe(true);
    expect(confirmBtn.textContent?.trim()).toBe('Deleting...');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(host.cancelled).toBe(0);
  });
});
