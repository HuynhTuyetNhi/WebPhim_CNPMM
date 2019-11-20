import { Component, OnInit, OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NguoidungsvService } from '../service/nguoidungsv.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.css']
})
export class DangNhapComponent implements OnInit,OnDestroy {
  dangNhapSubscription : Subscription
  constructor(private _nguoiDung : NguoidungsvService, private _route: Router) { }
  dangNhap(formDN: NgForm){
    var taiKhoan = formDN.value.TaiKhoan;
    var matKhau = formDN.value.MatKhau;

    this.dangNhapSubscription = this._nguoiDung.dangNhap(taiKhoan,matKhau).subscribe(
      res =>{
        console.log(res);
        if(res.MaLoaiNguoiDung ==='QuanTri'){
          document.cookie = 'token='+ res.token
        //quản trị
          localStorage.setItem('MaNguoiDung',JSON.stringify(res));
          this._route.navigate(['/admin']);
        }
        else if(res.MaLoaiNguoiDung ==='KhachHang'){
          document.cookie = 'token='+ res.token
          // khách hàng
          localStorage.setItem('MaNguoiDung',JSON.stringify(res));
          this._route.navigate(['/user']);
        }
      },
      err =>{
        console.log(err);
      }
    )
  }
  ngOnInit() {
  }
  ngOnDestroy(){
    if(this.dangNhapSubscription){
      this.dangNhapSubscription.unsubscribe();
    }
  }
}
