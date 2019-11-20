import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TrangChuModule} from '../app/trang-chu/trang-chu.module';
import { MaterialModule } from './share/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';
import {HttpModule} from '@angular/http';
import {FormGroup, FormControl, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { PhimModule } from '../app/phim/phim.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { PipeModule } from './pipe/pipe.module';
import { UserModule } from './user/user.module';

import { ContactpageModule } from './contactpage/contactpage.module';
import { TintucpageModule } from './tintucpage/tintucpage.module';


@NgModule({
  declarations: [
    AppComponent,
    AnimationdemoComponent,

  ],
  imports: [
    BrowserModule,
    TrangChuModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    PhimModule,
    AdminModule,
    AppRoutingModule,
    RouterModule,
    PipeModule,
    UserModule,
    ContactpageModule,
    TintucpageModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
