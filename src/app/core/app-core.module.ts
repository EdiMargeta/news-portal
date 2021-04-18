import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {MainComponent} from './main.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzAvatarModule, NzCardModule, NzDropDownModule, NzGridModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, SideMenuComponent, MainComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzGridModule,
    NzDropDownModule,
    NzCardModule,
    RouterModule,
    BrowserAnimationsModule,
    NzAvatarModule
  ],
  providers: [],
  exports: [
    HeaderComponent, SideMenuComponent, MainComponent
  ]
})
export class AppCommonModule {
}
