import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import axios from "axios";
@Injectable({
  providedIn: 'root'
})
export class PhimsvService {
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
  danhSachPhim: [] = [];
  LayPhimDangChieu() {
    var header = new Headers();
    header.append('Authorization', this.getCookie('token'));
    const url = `http://localhost:8080/api/QuanLyPhim/LayDanhSachPhim/1`
    return this._http.get(url, { headers: header }).pipe(
      map((res: Response) => {
        return res.json()
      }))
  }
  layDanhSachPhim() {
    var header = new Headers();
    header.append('Authorization', this.getCookie('token'));
    const url = `http://localhost:8080/api/QuanLyPhim/LayDanhSachPhim/2`
    return this._http.get(url, { headers: header }).pipe(
      map((res: Response) => res.json())
    )
  }
  themPhim(form) {
    console.log(form)
    const url = 'http://localhost:8080/api/QuanLyPhim/ThemPhimMoi'
    var headerAdd = new Headers();
    headerAdd.append('Authorization', this.getCookie('token'));
    // headerAdd.append('Content-Type', 'multipart/form-data');
    // var obser = axios.post(url, {
    //  MaPhim : form.get('MaPhim'),
    //  TenPhim: form.get('TenPhim'),
    //  Trailer: form.get('Trailer'),
    //  HinhAnh: form.get('HinhAnh'),
    //  DanhGia: form.get('DanhGia'),
    //  MoTa: form.get('MoTa'),
    //  NgayKhoiChieu: form.get('NgayKhoiChieu'),
    //  MaNhom: form.get('MaNhom')
    // }, {headers: headerAdd }).then(res => {
    //   console.log(res)
    //   return res
    // }).catch(err => console.log(err))
    // return obser;

    var obser = this._http.post(url, {
     MaPhim : form.value.maPhim,
     TenPhim:form.value.tenPhim,
     Trailer: form.value.trailer,
     HinhAnh: form.value.hinhAnh,
     DanhGia: form.value.danhGia,
     MoTa: form.value.moTa,
     NgayKhoiChieu: form.value.ngayKhoiChieu,
     MaNhom: form.value.maNhom
    }, { headers: headerAdd }).pipe(
      (map((res: Response) => {
        console.log(res.json());
        return res.json()
      }))
    )
    return obser;
  }
  XoaPhim(maPhim) {
    var header = new Headers();
    header.append('Authorization', this.getCookie('token'));
    const url = `http://localhost:8080/api/QuanLyPhim/XoaPhim/${maPhim}`;
    var obser = this._http.post(url,{MaPhim: maPhim},{headers: header}).pipe(
      (map((res: Response) =>{
        console.log(res)
        return  res.json()
      }))
    )
    return obser;

  }
  CapNhatPhim(form) {
    console.log(form)
    const url = `http://localhost:8080/api/QuanLyPhim/CapNhatPhim`
    var headerUpdate = new Headers();
    headerUpdate.append('Authorization', this.getCookie('token'));
    var obser = this._http.post(url, {
      MaPhim: form.MaPhim,
      TenPhim: form.TenPhim,
      Trailer: form.Trailer,
      // HinhAnh: form.hinhAnh,
      MoTa: form.MoTa,
      NgayKhoiChieu: form.NgayKhoiChieu,
      DanhGia: form.DanhGia,
      MaNhom: form.MaNhom
    }, { headers: headerUpdate }).pipe(
      (map((res: Response) => {
        console.log(res.json())
        return res.json()
      }))
    )
    return obser;
  }
  layChiTietPhim(maPhim: string) {
    return this._http.get(`http://localhost:8080/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`)
      .pipe(
        map((res: Response) => res.json()),
      )
  }
  constructor(private _http: Http) { }
}
