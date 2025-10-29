import { Injectable,computed, signal } from '@angular/core';

type AuthState = { user: string | null };

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private readonly STORAGE_KEY = 'lemoncode.lab.auth.v1';
  private readonly _user = signal<string | null>(null);
  readonly isLoggedIn = computed(() => !!this._user());

  constructor() {
    this.restore();
  }

  login(username: string, password: string): boolean {

    let isAuthenticated =
      username.localeCompare('master@lemoncode.net', undefined, { sensitivity: 'base' }) === 0
      &&
      password.localeCompare('12345678', undefined, { sensitivity: 'base' }) === 0;

    if (isAuthenticated) {
      this._user.set(username);
      this.persist();
    }

    return isAuthenticated;
  }

  logout(): void {
    this._user.set(null);
    localStorage.removeItem(this.STORAGE_KEY);
  }

  
  getUsername(): string | null {
    return this.isLoggedIn() ? this._user(): null;
  }

  private persist(): void {
    const state: AuthState = { user: this._user() };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
  }

  private restore(): void {
    try {

      const raw = localStorage
        .getItem(this.STORAGE_KEY);

      if (!raw) {
        return;
      }

      const parsed = JSON.parse(raw) as AuthState;
      this._user.set(parsed.user ?? null);

    } catch {
      localStorage.removeItem(this.STORAGE_KEY);
    }
  }
}
