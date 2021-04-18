import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InheritenceRoutingModule} from './inheritence-routing.module';
import {InheritenceComponent} from './inheritence.component';


@NgModule({
  declarations: [InheritenceComponent],
  imports: [
    CommonModule,
    InheritenceRoutingModule
  ]
})
export class InheritenceModule { }
