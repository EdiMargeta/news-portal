import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpinnerProvider {
  // @ts-ignore
  private readonly spinner: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public readonly spinner$ = this.spinner.asObservable();

  showSpinner(show: boolean = true): void {
    this.spinner.next(show);
  }
  turnOffSpinner(): void {
    this.spinner.next(false);
  }

}

