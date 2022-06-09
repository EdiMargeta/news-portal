
import {LoginProvider} from '../../pages/login/providers/login.provider';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private loginProvider: LoginProvider
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const loggedIn = this.loginProvider.getJwtToken() != null;
    if (!loggedIn) {
      this.loginProvider.removeTokens();
      this.router.navigate([ '/' ]);
    }
    return loggedIn;
  }
}
