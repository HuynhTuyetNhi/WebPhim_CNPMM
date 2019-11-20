import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import {  } from 'protractor';

@Component({
  selector: 'app-gheiteam',
  templateUrl: './gheiteam.component.html',
  styleUrls: ['./gheiteam.component.css']
})
export class GheiteamComponent implements OnInit {
  @Input() gheiteam :any ;
  @Output() iteamCom = new EventEmitter();
  status: boolean = false;
  constructor() { }
  Choice(){
    // click vào choice , status transfer into true, out put bắt sự kiện emit 
    this.status = !this.status;
    if(!status){
      this.iteamCom.emit({
      stt: this.status,
      ghe : this.gheiteam,
      })
      this.gheiteam.TrangThai = false;
    }
  }
 

  ngOnInit() {
  }

}
