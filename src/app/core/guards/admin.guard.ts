import {MainComponent} from '../main.component';
import {LoginProvider} from '../../pages/login/providers/login.provider';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard extends MainComponent implements CanActivate {

  constructor(
    private router: Router,
    private loginProvider: LoginProvider) {
    super();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.loginProvider.loggedUser && this.loginProvider.loggedUser.userRole === 'ADMIN';
  }
}
