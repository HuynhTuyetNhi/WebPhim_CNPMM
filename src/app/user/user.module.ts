import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { MaterialModule } from '../share/material/material.module';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLayoutComponent, HomeUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    TrangChuModule,
    FormsModule
  ],
  exports:[
    UserLayoutComponent, HomeUserComponent
  ]
})
export class UserModule { }
