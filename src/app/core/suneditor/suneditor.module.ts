import {SuneditorComponent} from './suneditor.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {QuillModule} from 'ngx-quill';
import Quill from 'quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule, NzFormModule, NzGridModule, NzInputModule, NzSelectModule} from 'ng-zorro-antd';
import {AppCoreModule} from '../app-core.module';

@NgModule({
  declarations: [SuneditorComponent],
  exports: [
    SuneditorComponent
  ],
  imports: [
    CommonModule,
    QuillModule,
    FormsModule,
    NzButtonModule,
    NzGridModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    AppCoreModule,
  ]
})
export class SuneditorModule {
}
