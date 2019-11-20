import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TrangChuModule } from '../trang-chu/trang-chu.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    TrangChuModule
  ]
})
export class ContactpageModule { }
