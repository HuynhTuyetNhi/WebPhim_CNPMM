import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [NewComponent],
  imports: [
    CommonModule,
    TrangChuModule
    
  ]
})
export class NewsModule { }
