import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {

  name ='';
  NguoiDung = {
		TaiKhoan : '',
		MatKhau: '',
		Email:'',
		SoDT:'',
		MaNhom:'',
		MaLoaiNguoiDung:'',
		HoTen:''	
      };

  constructor() { }

  ngOnInit() {
    if(localStorage){
      let data = localStorage.getItem('MaNguoiDung');
     this.NguoiDung = JSON.parse(data);
     this.name = this.NguoiDung.TaiKhoan ;
     console.log(this.name);
    }
//     let data = localStorage.getItem('MaNguoiDung');
//     this.NguoiDung = JSON.parse(data) ;
//     this.nd = this.NguoiDung.TaiKhoan ;
//    console.log(this.NguoiDung.TaiKhoan);
// } else {
//     alert('Không lấy dc !');

  }

}
