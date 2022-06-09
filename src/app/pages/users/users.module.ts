import {NgModule} from '@angular/core';
import {UsersProvider} from './users.provider';
import {UsersComponent} from './users.component';
import {UsersRoutingModule} from './users-routing.module';
import {
  NzDividerModule,
  NzDropDownModule,
  NzGridModule,
  NzIconModule,
  NzInputModule,
  NzModalModule,
  NzTableModule,
  NzWaveModule
} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent
  ],
  exports: [],
  imports: [
    UsersRoutingModule,
    NzTableModule,
    NzDividerModule,
    CommonModule,
    NzGridModule,
    NzWaveModule,
    NzModalModule,
    FormsModule,
    NzInputModule,
    NzDropDownModule,
    NzIconModule
  ],
  providers: [UsersProvider]
})
export class UsersModule {
}
