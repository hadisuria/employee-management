import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { EmployeeStatus } from '../../../core/models/employee.model';

@Component({
  selector: 'app-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="status-pill" [attr.data-variant]="variant()">{{ label() }}</span>
  `,
  styles: `
    .status-pill {
      display: inline-flex;
      align-items: center;
      padding: 3px 10px;
      border-radius: 9999px;
      border: 1px solid transparent;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .status-pill[data-variant='active'] {
      background-color: light-dark(#dcfce7, #14532d);
      border-color: light-dark(#86efac, #166534);
      color: light-dark(#166534, #bbf7d0);
    }

    .status-pill[data-variant='leave'] {
      background-color: var(--mat-sys-tertiary-container);
      border-color: var(--mat-sys-tertiary-fixed-dim);
      color: var(--mat-sys-on-tertiary-container);
    }

    .status-pill[data-variant='probation'] {
      background-color: var(--mat-sys-primary-container);
      border-color: light-dark(#81aaff, #2973e5);
      color: var(--mat-sys-on-primary-container);
    }

    .status-pill[data-variant='inactive'] {
      background-color: var(--mat-sys-surface-container-high);
      border-color: var(--mat-sys-outline-variant);
      color: var(--mat-sys-on-surface-variant);
    }
  `,
})
export class StatusBadgeComponent {
  readonly status = input.required<EmployeeStatus | string>();

  readonly label = computed(() => this.status() || 'Unknown');

  readonly variant = computed(() => {
    switch (this.status()) {
      case 'Active':
        return 'active';
      case 'On Leave':
        return 'leave';
      case 'Probation':
        return 'probation';
      default:
        return 'inactive';
    }
  });
}
