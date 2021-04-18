import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {HttpClientModule} from '@angular/common/http';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {AppCommonModule} from './core/app-core.module';
import {NzGridModule, NzSpinModule} from 'ng-zorro-antd';
import {IconsProviderModule} from './icons-provider.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    HttpClientModule,
    NzLayoutModule,
    AppCommonModule,
    NzGridModule,
    NzSpinModule,
  ],

  providers: [
    {provide: NZ_I18N, useValue: en_US}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
