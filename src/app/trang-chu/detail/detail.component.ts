import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChitietphimService } from '../service/chitietphim.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  phim: any = {};
  maPhim:string ;
  constructor(private _activateRoute: ActivatedRoute, private _chiTietPhim: ChitietphimService) { }



  ngOnInit() {
    this._activateRoute.queryParams.subscribe(
      (res) =>{
        console.log(res);
        this.maPhim = res.maPhim
        this._chiTietPhim.layChiTietPhim(this.maPhim).subscribe(
          (res)=>{
            this.phim = res.data[0] ;
            console.log(this.phim);
            var trailerArr = this.phim.Trailer.split('watch?v=');
            // hàm split chuyển chuổi thành mảng
            console.log(trailerArr);
            this.phim.Trailer =  `${trailerArr[0]}embed/${trailerArr}[1]`;
            console.log(this.phim.Trailer);
            console.log(this.phim.LichChieu);
          }
        )
      },
      (err) =>{
        console.log(err);
      }
    )

  }

}
