import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthStateService } from '../../../core/state/auth-state.service';
import { EmployeeListStateService } from '../../../core/state/employee-list-state.service';
import { ViewportService } from '../../../core/state/viewport.service';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  private readonly router = inject(Router);
  private readonly listState = inject(EmployeeListStateService);
  readonly authState = inject(AuthStateService);
  readonly viewport = inject(ViewportService);

  readonly menuOpen = signal(false);
  readonly userInitial = computed(() => {
    const name = this.authState.username().trim();
    return name ? name.charAt(0).toUpperCase() : 'A';
  });

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  logout(): void {
    this.menuOpen.set(false);
    this.authState.logout();
    this.listState.resetAll();
    void this.router.navigate(['/login']);
  }
}
