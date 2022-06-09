import {MainComponent} from '../main.component';
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Router} from '@angular/router';
import {LoginProvider} from '../../pages/login/providers/login.provider';
import {takeUntil} from 'rxjs/operators';
import {ApiResponse} from '../../models/base/api.model';
import {LogoutUser} from '../state/actions/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends MainComponent implements OnInit {
  username = '';

  constructor(private store: Store,
              private router: Router,
              private loginProvider: LoginProvider
  ) {
    super();
  }

  ngOnInit(): void {
    // this.username = `${ this.authState.firstName } ${ this.authState.lastName }`;
  }

  //
  logoutUser(): void {
    this.loginProvider.logoutUser()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((response: ApiResponse<boolean>) => {
        if (response) {
          this.store.dispatch(new LogoutUser());
          this.loginProvider.removeTokens();
          this.router.navigate([ '/' ]);
        } else {
          // An error has occured
        }
      });
  }
  //
  // editCompany(item?: CompanyModel): void {
  //   const ref = this.drawerService.create({
  //     nzTitle: item ?
  //       this.translation.translate('userManagement.company.edit') : this.translation.translate('userManagement.company.add'),
  //     nzContent: CompanyEditComponent,
  //     nzWidth: '425px',
  //     nzContentParams: { editCompany: item }
  //   });
  //   ref.afterClose.subscribe(() => {
  //   });
  // }
  //
  // onChangePassword(): void {
  //   const ref = this.drawerService.create({
  //     nzContent: ChangePasswordComponent,
  //     nzWidth: '425px',
  //   });
  //   ref.afterClose.subscribe(() => {
  //   });
  // }
}
