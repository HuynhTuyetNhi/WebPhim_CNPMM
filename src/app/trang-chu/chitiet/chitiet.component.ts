import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChitietphimService } from '../service/chitietphim.service';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  num: number = 0;
  value: number = 85000 ;
  tong : number = 0;
  phim:any= {};
  maPhim:string;
  constructor(private _activateRoute: ActivatedRoute, private _chiTietPhim:ChitietphimService) { }
  tinhTien(){
    this.tong = this.value * this.num ;
    localStorage.setItem('TongTien',JSON.stringify(this.tong));
  }
  tang(){
    this.num === this.num ++ ;
    this.tinhTien();
  }
  giam(){
    this.num === this.num -- ;
    this.tinhTien();
  }
  ngOnInit() {
    this._activateRoute.queryParams.subscribe(
      (res) =>{
        console.log(res);
        this.maPhim = res.maPhim;
        this._chiTietPhim.layChiTietPhim(this.maPhim).subscribe(
          (res) =>{
            this.phim = res.data[0];
          }
        )
      },
      (err) =>{
        console.log(err);
      }
    )
  }

}
