import { computed, Injectable, signal } from '@angular/core';

interface StoredSession {
  token: string;
  username: string;
}

const SESSION_STORAGE_KEY = 'em_auth_session';

@Injectable({ providedIn: 'root' })
export class AuthStateService {
  private readonly session = signal<StoredSession | null>(this.readSession());

  readonly token = computed(() => this.session()?.token ?? null);
  readonly username = computed(() => this.session()?.username ?? '');
  readonly isAuthenticated = computed(() => Boolean(this.session()?.token));

  setSession(token: string, username: string): void {
    const next: StoredSession = { token, username };
    this.session.set(next);
    this.writeSession(next);
  }

  logout(): void {
    this.session.set(null);
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // Ignore storage access failures in restricted environments.
    }
  }

  private readSession(): StoredSession | null {
    try {
      const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as Partial<StoredSession>;
      if (typeof parsed.token === 'string' && typeof parsed.username === 'string') {
        return { token: parsed.token, username: parsed.username };
      }
      return null;
    } catch {
      return null;
    }
  }

  private writeSession(value: StoredSession): void {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(value));
    } catch {
      // Ignore storage quota or sandbox errors.
    }
  }
}
