import { Component, OnInit } from '@angular/core';
import { NguoidungsvService } from 'src/app/trang-chu/service/nguoidungsv.service';
import { NgForm, Form } from '@angular/forms';
import { Router } from '@angular/router';
import * as $ from 'jquery';
declare var require: any;
// CommonJS
const Swal = require('sweetalert2');


@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {

  listNguoiDung: any[] = [];
  // nguoiDung: string;
  status: boolean = false;
  nd = '';
  form: any;
  NguoiDung = {
		TaiKhoan : '',
		MatKhau: '',
		Email:'',
		SoDT:'',
		MaNhom:'',
		MaLoaiNguoiDung:'',
		HoTen:''	
      };
      change:boolean = true;
      onchange(){
        this.change = !this.change ;
      }
  SearchCode(){
    let name = $('#Search').val();
    console.log(name);
    let nguoiDung = {
      TaiKhoan: this.NguoiDung.TaiKhoan,
      MatKhau: this.NguoiDung.MatKhau,
      Email: this.NguoiDung.Email,
      HoTen: this.NguoiDung.HoTen,
      SoDT: this.NguoiDung.SoDT,
      MaLoaiNguoiDung: this.NguoiDung.MaLoaiNguoiDung,
      MaNhom: this.NguoiDung.MaNhom
    }
    let index = this.listNguoiDung.findIndex(nd => nd.TaiKhoan === name);
    if(index !== -1){
     nguoiDung = this.listNguoiDung[index];
      console.log(nguoiDung);
      //  tìm kiếm dc rồi nhưng chưa hiện lên giao diện
    
    }

    // gõ name vào , lấy giá trị ra, tìm vị trị lấy nguyên object có tên là name
   
  }
 
 
  SuaND(tk, mk, email, hoten, sodt, maLoai, maNhom) {
    this.status = false;
    let nguoiDung = {
      TaiKhoan: tk,
      MatKhau: mk,
      Email: email,
      HoTen: hoten,
      SoDT: sodt,
      MaLoaiNguoiDung: maLoai,
      MaNhom: maNhom
    }
    let tkhoan: any = $('#TaiKhoan').val(nguoiDung.TaiKhoan);
    let mkhau: any = $('#MatKhau').val(nguoiDung.MatKhau);
    let mail: any = $('#Email').val(nguoiDung.Email);
    let Hoten: any = $('#HoTen').val(nguoiDung.HoTen);
    let dt: any = $('#SoDT').val(nguoiDung.SoDT);
    let loaiND: any = $('#MaLoaiNguoiDung').val(nguoiDung.MaLoaiNguoiDung);
    let nhom: any = $('#MaNhom').val(nguoiDung.MaNhom);
    console.log(nguoiDung);

    // this.ThemNguoiDung(nguoiDung);
   
   
    return this.status;
  }

  XoaND(taiKhoan: string) {

    let index = this.listNguoiDung.findIndex(nd => nd.TaiKhoan === taiKhoan)
    if (index !== -1) {
      this._nguoiDung.XoaNguoiDung(taiKhoan).subscribe(
        res => {
          this.listNguoiDung.splice(index, 1);
          console.log(this.listNguoiDung);
          Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Xóa thành công',
            showConfirmButton: false,
            timer: 2500
          })
        },
        err => console.log(err)
      )
    }

  }
  addUser() {
    this.status = true;
    return this.status;
  }
  ThemNguoiDung(form) {
    console.log(form)
    if (this.status) {
      this._nguoiDung.themNguoiDung(form).subscribe(
        (res) => {
          console.log(res)
          this.listNguoiDung.push(res.user);
          console.log(this.listNguoiDung);
          Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Thêm thành công',
            showConfirmButton: false,
            timer: 2500
          })
        },
        err => {
          console.log(err);
        }
      )
      $('.close').click();
    }
    else
    {
      console.log('Sửa');
      let tk = $('#TaiKhoan').val();
      let mk =$('#MatKhau').val();
      let email = $('#Email').val();
      let soDT = $('#SoDT').val();
      let hoTen = $('#HoTen').val();
      let maLoai = $('#MaLoaiNguoiDung').val();
      let maNhom = $('#MaNhom').val();

      let nd ={
        TaiKhoan : tk,
        MatKhau :mk,
        Email: email,
        SoDT: soDT,
        HoTen: hoTen,
        MaLoaiNguoiDung : maLoai,
        MaNhom: maNhom
      }
      this._nguoiDung.CapNhatNguoiDung(nd).subscribe(
        (res) =>{
          let index = this.listNguoiDung.findIndex(nguoiDung => nguoiDung.TaiKhoan === nd.TaiKhoan);
          if(index !== -1){
            this.listNguoiDung[index]= nd;
            console.log(this.listNguoiDung[index]);
            Swal.fire({
              position: 'top-center',
              type: 'success',
              title: 'Sửa thành công',
              showConfirmButton: false,
              timer: 2500
            })
        }
        (err) =>{
          console.log(err);
        }
      }
      )
    }
    $('.close').click();
    form.reset();
  }
  constructor(private _nguoiDung: NguoidungsvService, private _router: Router) { }

  ngOnInit() {
    if ( typeof(Storage) !== "undefined") {
      let data = localStorage.getItem('MaNguoiDung');
      this.NguoiDung = JSON.parse(data) ;
      this.nd = this.NguoiDung.TaiKhoan ;
     console.log(this.NguoiDung.TaiKhoan);
  } else {
      alert('Không lấy dc !');
  }
    this._nguoiDung.layDanhSachNguoiDung().subscribe(
      (res) => {
        console.log(res);
        this.listNguoiDung = res.listuser;
      },
      err => {
        console.log(err);
      }
    )

  }


}


// let tkhoan: any = $('#TaiKhoan').val();
//     let mkhau:any = $('#MatKhau').val();
//     let mail:any = $('#Email').val();
//     let Hoten:any = $('#HoTen').val();
//     let dt:any = $('#SoDT').val();
//     let loaiND: any = $('#MaLoaiNguoiDung').val();
//     let nhom:any = $('#MaNhom').val();

//     let nd ={
//       TaiKhoan : tkhoan,
//       MatKhau: mkhau,
//       Email: mail,
//       HoTen: Hoten,
//       SoDT : dt,
//       MaLoaiNguoiDung : loaiND,
//       MaNhom : nhom
//     }
//       this.listNguoiDung[index] = nd;
//       console.log(this.listNguoiDung[index]);