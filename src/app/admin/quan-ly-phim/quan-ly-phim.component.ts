import { Component, OnInit } from '@angular/core';
import { PhimsvService } from 'src/app/trang-chu/service/phimsv.service';
import { Form, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as $ from 'jquery';
import { Http, Response, Headers } from '@angular/http';
declare var require: any;


// import 'sweetalert2/src/sweetalert2.scss';
const Swal:any = require('sweetalert2');

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  form: FormGroup;
  listPhim: any[] = [];
  status: boolean = true;
  filmname = '';
  valueHinhAnh = ''
  film ={
    MaPhim :'',
    TenPhim:'',
    Trailer:'',
    HinhAnh:'',
    MoTa:'',
    MaNhom:'',
    DanhGia:'',
    NgayKhoiChieu:''
  };
  change:boolean = true;
  onchange(){
    this.change = !this.change ;
  }

  onFileChange(event){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('HinhAnh').setValue(file);
    }
  }
  constructor(private _phimsv: PhimsvService, private fb: FormBuilder, private _http: Http) { 
    this.form = this.fb.group({
      MaPhim: ['', Validators.required],
      TenPhim: ['', Validators.required],
      Trailer: ['', Validators.required],
      MaNhom: ['', Validators.required],
      MoTa: ['', Validators.required],
      DanhGia: ['', Validators.required],
      NgayKhoiChieu: ['', Validators.required],
      HinhAnh: ''
    })
  }
  get f() { return this.form.controls; }
  // SearchCode(){
  //   let name = $('#Search').val();
  //   console.log(name);
  //   let index = this.listPhim.findIndex(nd => nd.TenPhim === name);
  //     this.film = this.listPhim[index];
  //     console.log(this.film);
  //     // search dc roi chua load len giao dien
  // }
  addfilm() {
    this.status = true;
    return this.status;
  }
  ThemPhim(formAdd) {
    // let formData: FormData = new FormData();
    // formData.append('HinhAnh', this.form.get('HinhAnh').value);
    // formData.append('MaPhim', this.form.get('MaPhim').value )
    // formData.append('TenPhim', this.form.get('TenPhim').value )
    // formData.append('Trailer', this.form.get('Trailer').value )
    // formData.append('MaNhom', this.form.get('MaNhom').value )
    // formData.append('MoTa', this.form.get('MoTa').value )
    // formData.append('NgayKhoiChieu', this.form.get('NgayKhoiChieu').value )
    // formData.append('DanhGia', this.form.get('DanhGia').value )
    if (this.status) {
      this._phimsv.themPhim(formAdd).subscribe(
        (res) => {
          this.listPhim.push(res.data);
          console.log(this.listPhim)
          Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Thêm thành công',
            showConfirmButton: false,
            timer: 2500
          })
        },
        (err) => {
          console.log(err);
        }
      )
      $('.close').click();
    }
    else {
      let ma = $('#MaPhim').val();
      let ten = $('#TenPhim').val();
      let trailer = $('#Trailer').val();
      let hinh = this.form.get('HinhAnh').value.name
      let moTa = $('#MoTa').val();
      let ngayKhoiChieu = $('#NgayKhoiChieu').val();
      let maNhom =$('#MaNhom').val();
      let danhGia = $('#DanhGia').val();
    
      let phim = {
        MaPhim: ma,
        TenPhim: ten,
        Trailer: trailer,
        HinhAnh: hinh,
        MoTa: moTa,
        NgayKhoiChieu: ngayKhoiChieu,
        DanhGia: danhGia,
        MaNhom : "2"
      }
      console.log(phim);
      this._phimsv.CapNhatPhim(phim).subscribe(
        (res) =>{
         let index = this.listPhim.findIndex(film => film.MaPhim === phim.MaPhim);
         if(index !== -1){
           this.listPhim[index] = phim;
           console.log(this.listPhim[index]);
           Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Sửa thành công',
            showConfirmButton: false,
            timer: 2500
          })
         }
        },
        (err) => console.log(err)
      )
    }
    $('.close').click();
    // form.reset();
  }
  XoaPhim(maPhim: string) {
    this._phimsv.XoaPhim(maPhim).subscribe(
      (res) => {
        let index = this.listPhim.findIndex(nd => nd.MaPhim === maPhim);
        if (index !== -1) {
          this.listPhim.splice(index, 1);
          console.log(this.listPhim)
          Swal.fire({
            position: 'top-center',
            type: 'success',
            title: 'Xóa thành công',
            showConfirmButton: false,
            timer: 2500
          })
        }
      }, (err) => {
        console.log(err);
      }
    )
  }
  SuaPhim(maphim, ten, trailerphim, mota, ngay, danhgia,nhom) {
    this.status = false;
    let phim = {
      MaPhim: maphim,
      TenPhim: ten,
      Trailer: trailerphim,
      MoTa: mota,
      NgayKhoiChieu: ngay,
      DanhGia: danhgia,
      MaNhom: nhom
    }
    console.log(phim)
    let maPhim:any = $('#MaPhim').val(phim.MaPhim);
    let tenPhim:any = $('#TenPhim').val(phim.TenPhim);
    let trailer:any = $('#Trailer').val(phim.Trailer);
    let moTa:any = $('#MoTa').val(phim.MoTa);
    let ngayKhoiChieu:any = $('#NgayKhoiChieu').val(phim.NgayKhoiChieu);
    let danhGia:any = $('#DanhGia').val(phim.DanhGia);
    let maNhom:any = $('#MaNhom').val(phim.MaNhom);

    // let maPhim:any = $('#MaPhim').val(maphim);
    // let tenPhim:any = $('#TenPhim').val(ten);
    // let trailer:any = $('#Trailer').val(trailerphim);
    // let hinhAnh:any = $('#HinhAnh').val(anh);
    // let moTa:any = $('#MoTa').val(mota);
    // let ngayKhoiChieu:any = $('#NgayKhoiChieu').val(ngay);
    // let danhGia:any = $('#DanhGia').val(danhgia);
    // let maNhom:any = $('#MaNhom').val(nhom)

    // fill lên form: Lấy giá trị tự form về nhẹt vào một đối tượng
    return this.status;
  }

  ngOnInit() {
    if(localStorage){
      let data = localStorage.getItem('MaNguoiDung');
      this.filmname = JSON.parse(data).TaiKhoan;
      console.log(this.filmname);
    }
    this._phimsv.layDanhSachPhim().subscribe(
      (res) => {
        this.listPhim = res.data;
        console.log(this.listPhim);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
