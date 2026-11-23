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
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .status-pill[data-variant='active'] {
      background-color: light-dark(#dcfce7, #14532d);
      color: light-dark(#166534, #bbf7d0);
    }

    .status-pill[data-variant='leave'] {
      background-color: light-dark(#fef3c7, #78350f);
      color: light-dark(#92400e, #fde68a);
    }

    .status-pill[data-variant='probation'] {
      background-color: light-dark(#dbeafe, #1e3a8a);
      color: light-dark(#1e40af, #bfdbfe);
    }

    .status-pill[data-variant='inactive'] {
      background-color: var(--mat-sys-surface-container-high);
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
