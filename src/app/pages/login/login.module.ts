import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import {
  NzButtonModule,
  NzCardModule,
  NzCheckboxModule,
  NzFormModule,
  NzGridModule,
  NzIconModule,
  NzInputModule
} from 'ng-zorro-antd';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzCardModule,
    NzGridModule,
    NzInputModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule,
    NzIconModule,
    NzCheckboxModule
  ]
})
export class LoginModule {
}
