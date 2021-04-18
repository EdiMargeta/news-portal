import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CultureRoutingModule} from './culture-routing.module';
import {CultureComponent} from './culture.component';


@NgModule({
  declarations: [CultureComponent],
  imports: [
    CommonModule,
    CultureRoutingModule
  ]
})
export class CultureModule { }
