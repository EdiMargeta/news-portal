import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginCommand } from '../command/login.command';
import { environment } from '../../../../environments/environment';
import { LoginResponseModel } from '../model/login-response.model';
import { AuthStateModel } from '../../../core/state/model/auth-state.model';
import { AuthState } from '../../../core/state/state/auth-state';
import { Select } from '@ngxs/store';
import {ApiResponse} from '../../../models/base/api.model';


@Injectable({
  providedIn: 'root'
})
export class LoginProvider {
  private readonly CCP_DATA = 'DGP_DATA';
  private readonly DEFAULT_LOCALE = 'defaultLocale';
  private readonly NEWS_URL = '/news-portal';
  private apiUrl = environment.apiUrl + this.NEWS_URL + '/api/auth/';

  @Select(AuthState) authState$: Observable<AuthStateModel>;

  constructor(private http: HttpClient, private r: Router) {
  }

  get loggedUser(): AuthStateModel | null {
    return null;
    // return this.authState;
  }

  loginUser(loginCommand: LoginCommand): Observable<ApiResponse<LoginResponseModel>> {
    return this.http.post<LoginResponseModel>(this.apiUrl + 'login', loginCommand)
      .pipe(
        tap((res: any) => {
          if (res.success) {
            this.storeJwtToken(res.response.jwtToken);
            this.storeRefreshToken(res.response.refreshToken);
          }
        }),
      );
  }

  logoutUser(): Observable<ApiResponse<boolean>> {
    return this.http.get<ApiResponse<boolean>>(this.apiUrl + 'logout');
  }

  public getUserInformation(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'logged-user-data');
  }

  public isUserLoggedIn(): boolean {
    // @ts-ignore
    return this.loggedUser.jwtToken !== null && this.getJwtToken() !== null && this.loggedUser.jwtToken === this.getJwtToken();
  }

  public getJwtToken(): any {
    const d = JSON.parse(localStorage.getItem(this.CCP_DATA) as string) as ISiteToken;
    return d ? d.jwtToken : null;
  }

  private storeJwtToken(jwt: string): void {
    let d = JSON.parse(localStorage.getItem(this.CCP_DATA) as string) as ISiteToken;
    if (!d) {
      d = this.createEmptyObj();
    }
    d.jwtToken = jwt;
    localStorage.setItem(this.CCP_DATA, JSON.stringify(d));
  }

  public removeTokens(): any {
    localStorage.removeItem(this.CCP_DATA);
    localStorage.removeItem(this.DEFAULT_LOCALE);
  }

  private getRefreshToken(): any {
    const d = JSON.parse(localStorage.getItem(this.CCP_DATA) as string) as ISiteToken;
    return d ? d.refreshToken : null;
  }

  private storeRefreshToken(refreshToken: string): any {
    // @ts-ignore
    let d = JSON.parse(localStorage.getItem(this.CCP_DATA)) as ISiteToken;
    if (!d) {
      d = this.createEmptyObj();
    }
    d.refreshToken = refreshToken;
    localStorage.setItem(this.CCP_DATA, JSON.stringify(d));
  }

  private createEmptyObj(): ISiteToken {
    return {
      jwtToken: '',
      refreshToken: '',
    } as ISiteToken;
  }
}

interface ISiteToken {
  jwtToken: string;
  refreshToken: string;
}
