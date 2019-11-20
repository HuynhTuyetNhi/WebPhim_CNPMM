import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes, Router} from '@angular/router';
import { DangKyComponent } from '../dang-ky/dang-ky.component';
import { DangNhapComponent } from '../dang-nhap/dang-nhap.component';
import { DetailComponent } from '../detail/detail.component';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';
import { HomeComponent } from '../home/home.component';
import { ChitietComponent } from '../chitiet/chitiet.component';
import { DatgheComponent } from '../datghe/datghe.component';
import { DanhSachPhimComponent } from 'src/app/phim/danh-sach-phim/danh-sach-phim.component';
import { PhimModule } from 'src/app/phim/phim.module';
//import { TintucComponent } from '../tintuc/tintuc.component';
// import { ReviewComponent } from '../review/review.component';
// import { SideBarComponent } from '../side-bar/side-bar.component';
import { HomeUserComponent } from 'src/app/user/home-user/home-user.component';
import { NewComponent } from 'src/app/news/new/new.component';
import { ContactComponent } from 'src/app/contactpage/contact/contact.component';
import { TintucComponent } from 'src/app/tintucpage/tintuc/tintuc.component';



const homeRouting : Routes =[
  {path:'',component:HomeLayoutComponent, children:[
    {path:'',component: HomeComponent},
    {path:'dangKy',component: DangKyComponent},
    {path:'dangNhap',component:DangNhapComponent},
    {path:'detail',component:DetailComponent},
    {path:'chitietphim',component:ChitietComponent},
    {path:'datghe',component: DatgheComponent},
    {path:'phim',component:DanhSachPhimComponent },
    {path:'tintuc',component:TintucComponent},
    {path:'lienhe',component:ContactComponent},
    {path:'user',component:HomeUserComponent}
  ]}
  
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRouting)
  ],
  exports:[
    RouterModule
  ]
})
export class HomeroutingModule { }
