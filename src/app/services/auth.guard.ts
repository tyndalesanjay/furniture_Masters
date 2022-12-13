import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url!: string;
  constructor(private auth: AuthService, private router: Router) { }

  private authState(): boolean {
    if (this.isLoginOrRegister()) {
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
  private notAuthState(): boolean {
    if (this.isLoginOrRegister()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  private isLoginOrRegister(): boolean {
    if (this.url.includes('login') || this.url.includes('register')) {
      return true;
    }
    return false;
  }

  // Determines if the current user can activate the given route.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.url = state.url;
    if (this.auth.isAuthenticated()) {
     return this.authState();
    }
    return this.notAuthState();
  }
}

