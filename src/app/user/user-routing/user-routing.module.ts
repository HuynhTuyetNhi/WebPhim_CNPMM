import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeUserComponent } from '../home-user/home-user.component';
import { TrangChuModule } from 'src/app/trang-chu/trang-chu.module';
import { UserLayoutComponent } from '../user-layout/user-layout.component';

const userrouting : Routes = [
  {path:'user',component:UserLayoutComponent,children:[
    {path:'',component:HomeUserComponent}
  ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userrouting),
  ],
  exports:[
    RouterModule
  ]
})
export class UserRoutingModule { }
