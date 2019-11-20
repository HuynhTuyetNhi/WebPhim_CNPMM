import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-list-phim',
  templateUrl: './list-phim.component.html',
  styleUrls: ['./list-phim.component.css']
})
export class ListPhimComponent implements OnInit {
  status = true;
  constructor() { }
  Choose(){
    this.status = ! this.status ;
    console.log(this.status);
  }
  ngOnInit() {
    
    
   
  }
}