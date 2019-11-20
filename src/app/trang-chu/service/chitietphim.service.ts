import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChitietphimService {
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
  ChiTietPhim: any[] = [];
  constructor(private _http: Http) { }
  layChiTietPhim(maPhim:string){
    const url = `http://localhost:8080/api/QuanLyPhim/LayChiTietPhim/${maPhim}`
    var header = new Headers();
    header.append('Authorization', this.getCookie('token'));
    return this._http.get(url, {headers: header}).pipe(
      map((res: Response) => res.json())
    )
    
  }
}
