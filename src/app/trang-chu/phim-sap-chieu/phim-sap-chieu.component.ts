import { Component, OnInit } from '@angular/core';
import { PhimsvService } from '../service/phimsv.service';
import $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css']
})
export class PhimSapChieuComponent implements OnInit {
  // constructor(private _PhimSV: PhimsvService) { }
  constructor(private _PhimSV : PhimsvService) { }
  listPhim :any[] =[];
 
  ngOnInit() {
    this._PhimSV.LayPhimDangChieu()
    .subscribe(
        (res) =>{
          console.log(res.data)
            this.listPhim = res.data.slice(0,4);
            console.log(this.listPhim);
        },
        (err) => console.log(err)
    )
  }}
