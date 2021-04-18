import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TourismComponent} from './tourism.component';
import {TourismRoutingModule} from './tourism-routing.module';
import {NewsModule} from '../../../../news.module';

@NgModule({
  declarations: [TourismComponent],
  imports: [
    CommonModule,
    TourismRoutingModule,
    NewsModule
  ]
})
export class TourismModule { }
