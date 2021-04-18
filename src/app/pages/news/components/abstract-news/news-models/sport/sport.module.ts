import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SportRoutingModule} from './sport-routing.module';
import {SportComponent} from './sport.component';


@NgModule({
  declarations: [SportComponent],
  imports: [
    CommonModule,
    SportRoutingModule
  ]
})
export class SportModule { }
