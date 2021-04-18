import {Component, OnInit} from '@angular/core';
import {MainComponent} from '../main.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = '';

  constructor() {
  }

  ngOnInit(): void {
    // this.username = `${ this.authState.firstName } ${ this.authState.lastName }`;
  }

  //
  // public logoutUser(): void {
  //   this.authProvider.logoutUser().pipe(takeUntil(this.unsubscribe))
  //     .subscribe((response) => {
  //       if (response.success && response.response) {
  //         this.router.navigate([ LOGIN_ROUTE ]);
  //       } else {
  //         throw new Error(`Logout failed. response.success: ${ response.success }; response.response: ${ response.response }`);
  //       }
  //     });
  // }
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
