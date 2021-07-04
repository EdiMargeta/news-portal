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
import {QuillModule} from 'ngx-quill';
import {NewsProvider} from './providers/news.provider';
import {CreateNewsComponent} from './components/create-news/create-news.component';
import { AllNewsComponent } from './components/all-news/all-news.component';
import {SuneditorComponent} from '../../core/suneditor/suneditor.component';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {SuneditorModule} from '../../core/suneditor/suneditor.module';


@NgModule({
  declarations: [NewsComponent, AbstractNewsComponent, MainCoverComponent, MainBodyComponent, SidebarComponent, CreateNewsComponent, AllNewsComponent],
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
    QuillModule.forRoot()
  ],
  providers: [NewsProvider]
})
export class NewsModule {
}
