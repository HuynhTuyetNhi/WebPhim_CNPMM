import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DanhSachPhimComponent } from './danh-sach-phim/danh-sach-phim.component';
import { ChitietphimComponent } from './chitietphim/chitietphim.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';
import { IteamPhimComponent } from './iteam-phim/iteam-phim.component';
import { MaterialModule } from '../share/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DanhSachPhimComponent, ChitietphimComponent, IteamPhimComponent],
  imports: [
    CommonModule,
    TrangChuModule,
    MaterialModule,
    RouterModule
  ],
  exports :[
    DanhSachPhimComponent, 
    ChitietphimComponent,
    IteamPhimComponent
  ]
})
export class PhimModule { }
