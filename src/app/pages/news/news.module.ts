import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import {NzButtonModule, NzCardModule, NzCarouselModule, NzGridModule} from 'ng-zorro-antd';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {AbstractNewsComponent} from './components/abstract-news/abstract-news.component';
import {MainCoverComponent} from './components/abstract-news/main-cover/main-cover.component';
import {MainBodyComponent} from './components/abstract-news/main-body/main-body.component';
import {SidebarComponent} from './components/abstract-news/sidebar/sidebar.component';
import {QuillModule} from 'ngx-quill';
import {NewsProvider} from './providers/news.provider';


@NgModule({
  declarations: [NewsComponent, AbstractNewsComponent, MainCoverComponent, MainBodyComponent, SidebarComponent],
  exports: [
    AbstractNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NzGridModule,
    NzMenuModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
    QuillModule.forRoot()
  ],
  providers: [NewsProvider]
})
export class NewsModule {
}
