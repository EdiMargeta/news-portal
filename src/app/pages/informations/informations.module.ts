import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InformationsComponent} from './components/informations.component';
import {InformationsRoutingModule} from './informations-routing.module';


@NgModule({
  declarations: [InformationsComponent],
  imports: [
    CommonModule,
    InformationsRoutingModule
  ]
})
export class InformationsModule {
}
