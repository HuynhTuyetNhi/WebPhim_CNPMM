import { Component, OnInit } from '@angular/core';
import { PhimsvService } from 'src/app/trang-chu/service/phimsv.service';

@Component({
  selector: 'app-danh-sach-phim',
  templateUrl: './danh-sach-phim.component.html',
  styleUrls: ['./danh-sach-phim.component.css']
})
export class DanhSachPhimComponent implements OnInit {
  danhSachPhim: [] =[];
 
  constructor(private _phimSV: PhimsvService) { }
  
  ngOnInit() {
    this._phimSV.LayPhimDangChieu()
    .subscribe(
      (res) =>{
        this.danhSachPhim = res.data.splice(0,4);
      },
      (err) => console.log(err)
    )
  }

}
