import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { PhimsvService } from '../service/phimsv.service';
declare var $:any;
@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit {
    listPhim : []= [];
  constructor(private _PhimSV: PhimsvService) { }

  ngOnInit() {
    this._PhimSV.LayPhimDangChieu()
    .subscribe(
      (res) =>{
        console.log(res.data.splice(0,4))
       this.listPhim = res.data.splice(0,4);
       console.log(this.listPhim);
      },
      err => console.log(err)
    )
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
    }
}

