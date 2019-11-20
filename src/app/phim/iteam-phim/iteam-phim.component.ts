import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phim-iteams',
  templateUrl: './iteam-phim.component.html',
  styleUrls: ['./iteam-phim.component.css']
})
export class IteamPhimComponent implements OnInit {
  @Input() itemPhims : any
  constructor() { }

  ngOnInit() {
  }

}
