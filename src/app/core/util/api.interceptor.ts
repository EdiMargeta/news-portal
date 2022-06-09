import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpXsrfTokenExtractor} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {BehaviorSubject, NEVER, Observable, of, throwError} from 'rxjs';
import {catchError, filter, switchMap, take} from 'rxjs/operators';
import {LogoutUser} from '../state/actions/auth.actions';
import {SpinnerProvider} from '../providers/spinner.provider';
import {LoginProvider} from '../../pages/login/providers/login.provider';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  private readonly XSRF_COOKIE_NAME = 'XSRF-TOKEN';
  private readonly XSRF_HEADER_NAME = 'X-XSRF-TOKEN';
  private isRefreshing = false;
  private showingLoggedOutMsg = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private loginProvider: LoginProvider,
    private store: Store,
    private router: Router,
    private spinnerProvider: SpinnerProvider,
    private tokenExtractor: HttpXsrfTokenExtractor) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Adding withCredentials option to each request
    request = this.addOptionInformation(request);

    // Token has to be added inside request if it is available
    // That means that has retrieved auth data
    const jwt = this.loginProvider.getJwtToken();
    if (jwt) {
      request = this.addAuthHeader(request, jwt);

      // XSRF interception
      const token = this.tokenExtractor.getToken() as string;
      if (token !== null && !request.headers.has(this.XSRF_COOKIE_NAME)) {
        request = this.addXsrfHeader(request, token);
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.logoutUser();
          // return this.handle401Error(request, next);
          // return throwError(error);
          return NEVER;
        } else {
          return throwError(error);
        }
      }),
    );
  }

  logoutUser(): void {
    if (!this.showingLoggedOutMsg) {
      this.showingLoggedOutMsg = true;
      // this.message.error('You are automatically logged out. Please log in again.')
      //   .onClose.subscribe(() => this.showingLoggedOutMsg = false);
      this.spinnerProvider.turnOffSpinner();
    }
    this.clearLoginUser();
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      // return this.loginProvider.refreshToken().pipe(
      //   switchMap((token: any) => {
      //     this.isRefreshing = false;
      //     this.refreshTokenSubject.next(token.jwt);
      //     return next.handle(this.addAuthHeader(request, token.jwt));
      //   }));

    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addAuthHeader(request, jwt));
        }));
    }
  }

  private addAuthHeader(request: HttpRequest<any>, token: string): any {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  private addXsrfHeader(request: HttpRequest<any>, token: string): any {
    return request.clone({
      setHeaders: {
        [this.XSRF_HEADER_NAME]: `${token}`,
      },
    });
  }

  private addOptionInformation(request: HttpRequest<any>): any {
    return request.clone({
      withCredentials: true
    });
  }

  private clearLoginUser(): void {
    this.store.dispatch(new LogoutUser());
    this.loginProvider.removeTokens();
    // setTimeout(() => {
    //   window.location.reload();
    // }, 500);
  }
}
