import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { EmployeeStatus } from '../../../core/models/employee.model';

@Component({
  selector: 'app-status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="badge" [class]="'badge-' + variant()">
      <span class="dot" aria-hidden="true"></span>
      {{ status() }}
    </span>
  `,
  styles: `
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: 9999px;
      border: 1px solid transparent;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      white-space: nowrap;
    }
    .dot {
      width: 6px;
      height: 6px;
      border-radius: 9999px;
      background-color: currentColor;
    }
    .badge-active {
      background-color: #dcfce7;
      border-color: #86efac;
      color: #166534;
    }
    .badge-leave {
      background-color: #fef3c7;
      border-color: #fcd34d;
      color: #92400e;
    }
    .badge-probation {
      background-color: #dbeafe;
      border-color: #93c5fd;
      color: #1e40af;
    }
    .badge-inactive {
      background-color: #f1f5f9;
      border-color: #cbd5e1;
      color: #475569;
    }
  `,
})
export class StatusBadgeComponent {
  readonly status = input.required<EmployeeStatus | string>();

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
