import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  status:boolean = true;
  constructor() { }
  TimKiem(){
    this.status = !this.status ;
    console.log(this.status);
  }
  ngOnInit() {
  }

}
