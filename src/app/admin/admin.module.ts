import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { MaterialModule } from '../share/material/material.module';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [QuanLyPhimComponent, QuanLyNguoiDungComponent, AdminLayoutComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    TrangChuModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  exports:[
    QuanLyPhimComponent, QuanLyNguoiDungComponent,AdminLayoutComponent
  ]

})
export class AdminModule { }
