import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import { map } from 'rxjs/operators';
// import CallApi from '../../until/CallApi';

@Injectable({
  providedIn: 'root'
})
export class NguoidungsvService {
  getCookie(name) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (name == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  XoaNguoiDung(taiKhoan:string){
    var header = new Headers()
    header.append('Authorization', this.getCookie('token'))
    var url=`http://localhost:8080/api/QuanLyNguoiDung/XoaNguoiDung/${taiKhoan}`;
    var obser = this._http.post(url,{TaiKhoan: taiKhoan},{headers: header}).pipe(
      map( (res:Response) => res.json())
    )
    return obser;
  }
  layDanhSachNguoiDung(){
    var header = new Headers()
    header.append('Authorization', this.getCookie('token'))
    var url =`http://localhost:8080/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`;
    var obser = this._http.get(url, {headers: header}).pipe(
      map ( (res:Response) => res.json() )
    )
    return obser;
  }
  dangNhap(taiKhoan:string, matKhau:string){
    var headerDN = new Headers();
    headerDN.append('Content-Type','application/json;charset=UTF-8');
    var url = `http://localhost:8080/api/QuanLyNguoiDung/DangNhap`;
    var obser = this._http.post(url,{
      TaiKhoan: taiKhoan,
      MatKhau: matKhau
    },{headers:headerDN}).pipe(
      map( (res: Response) => {
        return res.json()
      } ));
    return obser;
  }
  dangKy(form){
    console.log(form.value)
    var headerDK = new Headers();
    headerDK.append('Content-Type','application/json;charset=UTF-8');
    var url= `http://localhost:8080/api/QuanLyNguoiDung/ThemNguoiDung`;
    var obser = this._http.post(url,{
      Email: form.value.email,
      TaiKhoan: form.value.taiKhoan,
      MatKhau: form.value.matKhau,
      SoDT: form.value.soDT,
      HoTen: form.value.hoTen,
      MaNhom: form.value.matKhau,
      MaLoaiNguoiDung: form.value.MaLoaiNguoiDung
    },{headers: headerDK}).pipe(
      map((res:Response) => res.json())
    );
    return obser;
  }
  themNguoiDung(form){
    console.log(form)
    var headerAdd = new Headers();
    headerAdd.append('Authorization',this.getCookie('token'));
    var url= `http://localhost:8080/api/QuanLyNguoiDung/ThemAdmin`;
    var obser = this._http.post(url, {
      Email: form.value.email,
      TaiKhoan: form.value.taiKhoan,
      MatKhau: form.value.matKhau,
      SoDT: form.value.soDT,
      HoTen: form.value.hoTen,
      MaNhom: form.value.maNhom,
      MaLoaiNguoiDung: form.value.MaLoaiNguoiDung
    },{headers: headerAdd}).pipe(
      map((res:Response) => {
        return res.json() ;
      })
    );
    return obser;
  }
  CapNhatNguoiDung(form){
    console.log(form)
    var headerUp = new Headers();
    headerUp.append('Authorization', this.getCookie('token'))
    var url =`http://localhost:8080/api/QuanLyNguoiDung/CapNhatThongTin`;
    var obser = this._http.put(url,{
      TaiKhoan: form.TaiKhoan,
      MatKhau: form.MatKhau,
      Email: form.Email,
      SoDT: form.SoDT,
      HoTen: form.HoTen,
      MaLoaiNguoiDung: form.MaLoaiNguoiDung,
      MaNhom: form.MaNhom
    },{headers: headerUp}).pipe(
      map( (res:Response) => res.json())
    );
    return obser;
  }


  constructor(private _http: Http) { }



}
