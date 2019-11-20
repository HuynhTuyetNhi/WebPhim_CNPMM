import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TrangChuModule } from '../trang-chu/trang-chu.module';
// import { AdminModule } from '../admin/admin.module';
import {RouterModule, Routes} from '@angular/router';

const appRoute: Routes =[
  {path:'', loadChildren:'../trang-chu/trang-chu.module#TrangChuModule'},
  {path:'admin',loadChildren:'../admin/admin.module#AdminModule'},
  {path:'listphim',loadChildren:'../phim/phim.module#PhimModule'},
  {path:'user', loadChildren:'../user/user.module#UserModule'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
