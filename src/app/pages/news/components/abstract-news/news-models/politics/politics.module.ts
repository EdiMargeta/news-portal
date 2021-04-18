import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PoliticsRoutingModule} from './politics-routing.module';
import {PoliticsComponent} from './politics.component';
import {NewsModule} from '../../../../news.module';


@NgModule({
  declarations: [PoliticsComponent],
    imports: [
        CommonModule,
        PoliticsRoutingModule,
        NewsModule
    ]
})
export class PoliticsModule { }
