import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginCommand } from './command/login.command';
import { finalize, takeUntil } from 'rxjs/operators';
import { LoginProvider } from './providers/login.provider';
import { LoginResponseModel } from './model/login-response.model';
import { Router } from '@angular/router';
import { LoginUser } from '../../core/state/actions/auth.actions';
import { Store } from '@ngxs/store';
import { AuthStateModel } from '../../core/state/model/auth-state.model';
import {MainComponent} from '../../core/main.component';
import {ApiResponse} from '../../models/base/api.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.less' ]
})
export class LoginComponent extends MainComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean;
  loginError: boolean;

  constructor(private fb: FormBuilder,
              private router: Router,
              private store: Store,
              private loginProvider: LoginProvider) {
    super();
  }

  ngOnInit(): void {
    if (this.loginProvider.getJwtToken() !== null) {
      this.router.navigate([ '/news' ]);
    }
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: [ null, [ Validators.required, Validators.email ] ],
      password: [ null, [ Validators.required ] ],
      rememberMe: [ true ]
    });
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
  onLoginClick(){
    if (!this.loginForm.valid) {
      return false;
    }
    this.loginError = false;
    this.isLoading = true;
    const loginCommand = LoginCommand.fromObject(this.loginForm.value);
    this.loginProvider.loginUser(loginCommand)
      .pipe(takeUntil(this.unsubscribe), finalize(() => this.isLoading = false))
      .subscribe((res: ApiResponse<LoginResponseModel>) => {
        if (res.success) {
          console.log(res);
          this.store.dispatch(new LoginUser(AuthStateModel.fromObject(Object.assign({}, res.response.user, {
            jwtToken: res.response.jwtToken,
            refreshToken: res.response.refreshToken
          }))));
          this.router.navigate([ '/news' ]);
        }
      });
  }
}
