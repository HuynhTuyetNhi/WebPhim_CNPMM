import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TintucComponent } from './tintuc/tintuc.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [TintucComponent],
  imports: [
    CommonModule,
    TrangChuModule
  ]
})
export class TintucpageModule { }
