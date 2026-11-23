import { Injectable, signal } from '@angular/core';

interface ViewTransitionLike {
  ready: Promise<void>;
}

type DocumentWithViewTransition = Document & {
  startViewTransition?: (updateCallback: () => void) => ViewTransitionLike;
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'em_theme';
  private readonly isDarkSignal = signal(false);

  readonly isDark = this.isDarkSignal.asReadonly();

  constructor() {
    this.applyTheme(this.readStoredTheme(), false);
  }

  toggle(event?: MouseEvent): void {
    const nextDark = !this.isDarkSignal();
    const doc = document as DocumentWithViewTransition;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!doc.startViewTransition || prefersReducedMotion) {
      this.applyTheme(nextDark, true);
      return;
    }

    const origin = this.resolveOrigin(event);
    const endRadius = Math.hypot(
      Math.max(origin.x, window.innerWidth - origin.x),
      Math.max(origin.y, window.innerHeight - origin.y),
    );

    const transition = doc.startViewTransition(() => {
      this.applyTheme(nextDark, true);
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${origin.x}px ${origin.y}px)`,
              `circle(${endRadius}px at ${origin.x}px ${origin.y}px)`,
            ],
          },
          {
            duration: 500,
            easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        );
      })
      .catch(() => {
        // View transition may abort if another toggle occurs mid-flight.
      });
  }

  private resolveOrigin(event?: MouseEvent): { x: number; y: number } {
    const target = event?.currentTarget as HTMLElement | null;
    if (target) {
      const rect = target.getBoundingClientRect();
      if (rect.width > 0 || rect.height > 0) {
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        };
      }
    }

    if (event && (event.clientX > 0 || event.clientY > 0)) {
      return { x: event.clientX, y: event.clientY };
    }

    return {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
    };
  }

  private readStoredTheme(): boolean {
    try {
      return localStorage.getItem(this.storageKey) === 'dark';
    } catch {
      return false;
    }
  }

  private applyTheme(dark: boolean, persist: boolean): void {
    this.isDarkSignal.set(dark);
    document.documentElement.classList.toggle('dark-theme', dark);
    if (persist) {
      try {
        localStorage.setItem(this.storageKey, dark ? 'dark' : 'light');
      } catch {
        // Ignore storage write errors in restricted browsing contexts.
      }
    }
  }
}
