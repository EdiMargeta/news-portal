import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzButtonModule, NzCardModule, NzCarouselModule, NzGridModule} from 'ng-zorro-antd';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {CreateNewsRoutingModule} from './create-news-routing.module';
import {CreateNewsComponent} from './create-news.component';
import {QuillModule} from 'ngx-quill';

@NgModule({
  declarations: [CreateNewsComponent],
  exports: [],
  imports: [
    CommonModule,
    CreateNewsRoutingModule,
    NzGridModule,
    NzMenuModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
    QuillModule,
  ]

})
export class CreateNewsModule {
}
