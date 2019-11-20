import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuanLyPhimComponent } from '../quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from '../quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminLayoutComponent } from '../admin-layout/admin-layout.component';
import { TrangChuModule } from 'src/app/trang-chu/trang-chu.module';

const adminRouting : Routes =[
  {path:'admin',component:QuanLyNguoiDungComponent,children:[
    // {path:'quanlinguoidung',component:QuanLyNguoiDungComponent},
    // {path:'quanliphim',component:QuanLyPhimComponent},
    {path:'',component:TrangChuModule}
  ]},
  {path:'quanlinguoidung',component:QuanLyNguoiDungComponent},
  {path:'quanliphim',component:QuanLyPhimComponent},
    
 
]




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouting),
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
