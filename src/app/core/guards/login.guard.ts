
import {LoginProvider} from '../../pages/login/providers/login.provider';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private loginProvider: LoginProvider
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.loginProvider.getJwtToken() !== null) {
      this.router.navigate(['/']);
    }
    return this.loginProvider.getJwtToken() === null;
  }
}
