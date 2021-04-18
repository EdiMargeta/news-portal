import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Component({
  template: ``
})
export class MainComponent implements OnDestroy {
  unsubscribe: Subject<any> = new Subject<any>();

  // @Select(AuthState.getAuthState) authStateSelector: Observable<AuthStateModel>;
  // authState: AuthStateModel;

  constructor() {
    // constructor(private t: L10nTranslationService) {
      // this.authStateSelector.pipe(takeUntil(this.unsubscribe)).subscribe(state => {
    //   this.authState = state;
    // });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
