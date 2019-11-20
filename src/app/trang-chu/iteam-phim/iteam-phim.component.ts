import { Component, OnInit, Input } from '@angular/core';
// import { transition, animate, state, style, trigger, animation } from '@angular/animations';
declare var $:any;
@Component({
  selector: 'app-iteam-phim',
  templateUrl: './iteam-phim.component.html',
  styleUrls: ['./iteam-phim.component.css'],
  // animations:[
  //   trigger('changeDivSize', [
   
  //     state('initial', style({
  //       opacity:1
       
  //     })),
  //     state('final', style({
  //       opacity:0
     
       
  //     })),
  //     transition('initial => final', [
  //       animate('0.15s')
  //     ]),
  //     transition('final => initial', [
  //       animate('0.15s')
  //     ]),
  //   ]),
  // ]
})
export class IteamPhimComponent implements OnInit {
  @Input() phimIteam :any;
  constructor() { }

  ngOnInit() {
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
