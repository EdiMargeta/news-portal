import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CinemaComponent} from './components/cinema.component';
import {CinemaRoutingModule} from './cinema-routing.module';


@NgModule({
  declarations: [CinemaComponent],
  imports: [
    CommonModule,
    CinemaRoutingModule
  ]
})
export class CinemaModule {
}
