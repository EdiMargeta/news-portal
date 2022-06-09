import { AuthState } from './auth-state';
import { environment } from '../../../../environments/environment';
import { NgxsModule } from '@ngxs/store';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    NgxsModule.forRoot([
      AuthState
    ], { developmentMode: !environment.production })
  ]
})
export class StateModule {
}
