import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AttractionsComponent} from './components/attractions.component';
import {AttractionsRoutingModule} from './attractions-routing.module';


@NgModule({
  declarations: [AttractionsComponent],
  imports: [
    CommonModule,
    AttractionsRoutingModule
  ]
})
export class AttractionsModule {
}
