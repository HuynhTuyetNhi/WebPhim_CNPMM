import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ListPhimComponent } from './list-phim/list-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { IteamPhimComponent } from './iteam-phim/iteam-phim.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../share/material/material.module';
import {HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormGroup, FormControl, FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IteamPhimSapChieuComponent } from './iteam-phim-sap-chieu/iteam-phim-sap-chieu.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DangNhapComponent } from './dang-nhap/dang-nhap.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { ReviewComponent } from './review/review.component';
import { DienanhComponent } from './dienanh/dienanh.component';
import { HomeroutingModule } from './homerouting/homerouting.module';
// import { AppRoutingModule } from '../app-routing/app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { PipeModule } from '../pipe/pipe.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import {RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ChitietComponent } from './chitiet/chitiet.component';
import { DatgheComponent } from './datghe/datghe.component';
import {NgForm} from '@angular/forms';
import { GheiteamComponent } from './datghe/gheiteam/gheiteam.component';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
//import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SideBarComponent, ListPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, IteamPhimComponent, HomeComponent, IteamPhimSapChieuComponent, TintucComponent, DangNhapComponent, DangKyComponent, ReviewComponent, DienanhComponent, DetailComponent, HomeLayoutComponent, MenuComponent, ChitietComponent, DatgheComponent, GheiteamComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule,
    HomeroutingModule,
    // AppRoutingModule,
    PipeModule,
    RouterModule,

  
  ],
  exports:[
    HeaderComponent, FooterComponent, SideBarComponent, ListPhimComponent, PhimDangChieuComponent, PhimSapChieuComponent, IteamPhimComponent,HomeComponent,IteamPhimSapChieuComponent,TintucComponent, DangNhapComponent, DangKyComponent,
    ReviewComponent, DienanhComponent,DetailComponent,HomeLayoutComponent,
    MenuComponent,ChitietComponent,DatgheComponent,GheiteamComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrangChuModule { }
