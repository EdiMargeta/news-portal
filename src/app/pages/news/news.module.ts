import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsRoutingModule} from './news-routing.module';
import {NewsComponent} from './news.component';
import {NzButtonModule, NzCardModule, NzCarouselModule, NzGridModule} from 'ng-zorro-antd';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {AbstractNewsComponent} from './components/abstract-news/abstract-news.component';
import {MainCoverComponent} from './components/core/main-cover/main-cover.component';
import {MainBodyComponent} from './components/core/main-body/main-body.component';
import {SidebarComponent} from './components/core/sidebar/sidebar.component';
import {NewsProvider} from './providers/news.provider';
import {CreateNewsComponent} from './components/create-news/create-news.component';
import {AllNewsComponent} from './components/all-news/all-news.component';
import {SuneditorModule} from '../../core/suneditor/suneditor.module';
import {ArticleDetailsComponent} from './components/article-details/article-details.component';
import { AllNewsBodyComponent } from './components/all-news/all-news-body/all-news-body.component';


@NgModule({
  declarations: [
    NewsComponent,
    AbstractNewsComponent,
    MainCoverComponent,
    MainBodyComponent,
    SidebarComponent,
    CreateNewsComponent,
    AllNewsComponent,
    ArticleDetailsComponent,
    AllNewsBodyComponent],
  exports: [
    AbstractNewsComponent
  ],
  imports: [
    CommonModule,
    SuneditorModule,
    NewsRoutingModule,
    NzGridModule,
    NzMenuModule,
    NzCarouselModule,
    NzCardModule,
    NzButtonModule,
  ],
  providers: [NewsProvider]
})
export class NewsModule {
}
