import {Component, OnInit} from '@angular/core';
import {MainComponent} from './core/main.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends MainComponent implements OnInit  {
  isCollapsed = false;
  spinnerNumber = -1;
  // loginScreen: boolean;
  // isDataInit: boolean;
  // newPassword: boolean = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    // if (this.location.path().substring(0, 19).includes('/login/new-password')) {
    //   this.newPassword = true;
    }
  //   this.checkIfUserIsAuthenticated();
  //   this.spinner.spinner$.pipe(takeUntil(this.unsubscribe))
  //     .subscribe((showSpinner: boolean) => {
  //       this.spinnerNumber += showSpinner ? (this.spinnerNumber === 0 && !showSpinner) ? 0 : 1 : -1;
  //       this.changeDetectorRef.detectChanges();
  //     });
  //   this.router.events
  //     .pipe(takeUntil(this.unsubscribe))
  //     .subscribe(e => {
  //       if (e instanceof NavigationEnd) {
  //         if (this.newPassword === true) {
  //           this.loginScreen = e.url.substring(0, 19) === ('/login/new-password');
  //         } else {
  //           this.loginScreen = e.url === (LOGIN_ROUTE);
  //         }
  //       }
  //     });
  // }
  //
  // checkIfUserIsAuthenticated(): void {
  //   this.spinner.showSpinner();
  //   this.authProvider.getUserInformation()
  //     .pipe(takeUntil(this.unsubscribe), finalize(() => this.spinner.showSpinner(false)))
  //     .subscribe((response) => {
  //         if (response.success) {
  //           this.store.dispatch(new LoginUser(AuthStateModel.fromObject(response.response.account)));
  //           this.isDataInit = true;
  //         } else {
  //           this.onUserNotLoggedIn();
  //         }
  //       },
  //       () => this.onUserNotLoggedIn());
  // }
  //
  // onUserNotLoggedIn(): void {
  //   this.spinner.showSpinner(false);
  //   this.isDataInit = true;
  //   if (this.newPassword === true) {
  //     this.router.navigate([ this.location.path() ]).catch(console.error);
  //   } else {
  //     this.router.navigate([ LOGIN_ROUTE ]).catch(console.error);
  //   }

  // }
}
