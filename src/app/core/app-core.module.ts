import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MainComponent} from './main.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {
  NzAvatarModule, NzButtonModule,
  NzCardModule,
  NzDropDownModule,
  NzGridModule,
  NzMessageService,
  NzModalModule,
  NzUploadModule,
  NzWaveModule
} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, MainComponent, PageNotFoundComponent, ImageUploadComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzDropDownModule,
    NzCardModule,
    RouterModule,
    NzAvatarModule,
    NzUploadModule,
    NzModalModule,
    NzWaveModule,
    NzButtonModule,
  ],
  providers: [NzMessageService],
  exports: [
    HeaderComponent, SideMenuComponent, MainComponent, ImageUploadComponent
  ]
})
export class AppCoreModule {
}
