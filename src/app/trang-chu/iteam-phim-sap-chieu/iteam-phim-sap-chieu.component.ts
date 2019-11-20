import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-iteam-phim-sap-chieu',
  templateUrl: './iteam-phim-sap-chieu.component.html',
  styleUrls: ['./iteam-phim-sap-chieu.component.css']
})
export class IteamPhimSapChieuComponent implements OnInit {
  @Input() iteamPhim:any;
  constructor() { }

  ngOnInit() {
  }

}
