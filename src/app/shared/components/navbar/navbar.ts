import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStateService } from '../../../core/state/auth-state.service';
import { EmployeeListStateService } from '../../../core/state/employee-list-state.service';
import { ThemeService } from '../../../core/state/theme.service';
import { ViewportService } from '../../../core/state/viewport.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatDividerModule,
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly listState = inject(EmployeeListStateService);
  readonly authState = inject(AuthStateService);
  readonly theme = inject(ThemeService);
  readonly viewport = inject(ViewportService);

  readonly userInitial = computed(() => {
    const name = this.authState.username().trim();
    return name ? name.charAt(0).toUpperCase() : 'A';
  });

  logout(): void {
    this.authState.logout();
    this.listState.resetAll();
    void this.router.navigate(['/login']);
  }
}
