import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimsvService } from '../service/phimsv.service';
declare var require: any;
const Swal:any = require('sweetalert2');

@Component({
  selector: 'app-datghe',
  templateUrl: './datghe.component.html',
  styleUrls: ['./datghe.component.css']
})
export class DatgheComponent implements OnInit {
  tongTien:any = "";
  phim:any= {};
  maPhim:string;
  danhSachGhe= [
    {SoGhe : 1 ,TenGhe : "sá»‘ 1 " , Gia :100 , TrangThai :false}, 
  {SoGhe : 2 ,TenGhe : "sá»‘ 2 " , Gia :100 , TrangThai :false},
   {SoGhe : 3 ,TenGhe : "sá»‘ 3 " , Gia :100 , TrangThai :false}, 
  {SoGhe : 4 ,TenGhe : "sá»‘ 4 " , Gia :100 , TrangThai :false},
   {SoGhe : 5 ,TenGhe : "sá»‘ 5 " , Gia :100 , TrangThai :false},
   {SoGhe : 6 ,TenGhe : "sá»‘ 6 " , Gia :100 , TrangThai :false}, 
  {SoGhe : 7 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false}, 
  {SoGhe : 8 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false},
   {SoGhe : 9 ,TenGhe : "sá»‘ 9 " , Gia :100 , TrangThai :false},
   {SoGhe :10 ,TenGhe : "sá»‘ 10 " , Gia :100 , TrangThai :false}, 
  {SoGhe :11 ,TenGhe : "sá»‘ 11 " , Gia :100 , TrangThai :false},
   {SoGhe :12 ,TenGhe : "sá»‘ 12 " , Gia :100 , TrangThai :false}, 
  {SoGhe :13 ,TenGhe : "sá»‘ 13 " , Gia :100 , TrangThai :false}, 
  {SoGhe :14 ,TenGhe : "sá»‘ 14 " , Gia :100 , TrangThai :false},
   {SoGhe :15 ,TenGhe : "sá»‘ 15 " , Gia :100 , TrangThai :false},
   {SoGhe :16 ,TenGhe : "sá»‘ 16 " , Gia :100 , TrangThai :false},
   {SoGhe :17 ,TenGhe : "sá»‘ 17 " , Gia :100 , TrangThai :false}, 
  {SoGhe :18 ,TenGhe : "sá»‘ 18 " , Gia :100 , TrangThai :false},
   {SoGhe :19 ,TenGhe : "sá»‘ 19 " , Gia :100 , TrangThai :false},
   {SoGhe :20 ,TenGhe : "sá»‘ 20 " , Gia :100 , TrangThai :false},
   {SoGhe :21 ,TenGhe : "sá»‘ 21 " , Gia :100 , TrangThai :false}, 
  {SoGhe :22 ,TenGhe : "sá»‘ 22 " , Gia :100 , TrangThai :false},
   {SoGhe :23 ,TenGhe : "sá»‘ 23 " , Gia :100 , TrangThai :false},
   {SoGhe :24 ,TenGhe : "sá»‘ 24 " , Gia :100 , TrangThai :false}, 
  {SoGhe :25 ,TenGhe : "sá»‘ 25 " , Gia :100 , TrangThai :false}, 
  {SoGhe :26 ,TenGhe : "sá»‘ 26 " , Gia :100 , TrangThai :false}, 
  {SoGhe :27 ,TenGhe : "sá»‘ 27 " , Gia :100 , TrangThai :false},
   {SoGhe :28 ,TenGhe : "sá»‘ 28 " , Gia :100 , TrangThai :false},
   {SoGhe :29 ,TenGhe : "sá»‘ 29 " , Gia :100 , TrangThai :false},
   {SoGhe :30 ,TenGhe : "sá»‘ 30 " , Gia :100 , TrangThai :false}, 
  {SoGhe :31 ,TenGhe : "sá»‘ 31 " , Gia :100 , TrangThai :false}, 
  {SoGhe :32 ,TenGhe : "sá»‘ 32 " , Gia :100 , TrangThai :false},
   {SoGhe :33 ,TenGhe : "sá»‘ 33 " , Gia :100 , TrangThai :false}, 
  {SoGhe :34 ,TenGhe : "sá»‘ 34 " , Gia :100 , TrangThai :false},
   {SoGhe :35 ,TenGhe : "sá»‘ 35 " , Gia :100 , TrangThai :false},
   {SoGhe : 36 ,TenGhe : "sá»‘ 1 " , Gia :100 , TrangThai :false}, 
   {SoGhe : 37 ,TenGhe : "sá»‘ 2 " , Gia :100 , TrangThai :false},
    {SoGhe : 38 ,TenGhe : "sá»‘ 3 " , Gia :100 , TrangThai :false}, 
   {SoGhe : 39 ,TenGhe : "sá»‘ 4 " , Gia :100 , TrangThai :false},
    {SoGhe : 40 ,TenGhe : "sá»‘ 5 " , Gia :100 , TrangThai :false},
    {SoGhe : 41 ,TenGhe : "sá»‘ 6 " , Gia :100 , TrangThai :false}, 
   {SoGhe : 42 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false}, 
   {SoGhe : 43 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false},
    {SoGhe :44 ,TenGhe : "sá»‘ 9 " , Gia :100 , TrangThai :false},
    {SoGhe :45 ,TenGhe : "sá»‘ 10 " , Gia :100 , TrangThai :false}, 
   {SoGhe :46 ,TenGhe : "sá»‘ 11 " , Gia :100 , TrangThai :false},
    {SoGhe :47 ,TenGhe : "sá»‘ 12 " , Gia :100 , TrangThai :false}, 
   {SoGhe :48 ,TenGhe : "sá»‘ 13 " , Gia :100 , TrangThai :false}, 
   {SoGhe :49 ,TenGhe : "sá»‘ 14 " , Gia :100 , TrangThai :false},
    {SoGhe :50 ,TenGhe : "sá»‘ 15 " , Gia :100 , TrangThai :false},
    {SoGhe :51 ,TenGhe : "sá»‘ 16 " , Gia :100 , TrangThai :false},
    {SoGhe :52 ,TenGhe : "sá»‘ 17 " , Gia :100 , TrangThai :false}, 
   {SoGhe :53 ,TenGhe : "sá»‘ 18 " , Gia :100 , TrangThai :false},
    {SoGhe :54 ,TenGhe : "sá»‘ 19 " , Gia :100 , TrangThai :false},
    {SoGhe :55 ,TenGhe : "sá»‘ 20 " , Gia :100 , TrangThai :false},
    {SoGhe :56 ,TenGhe : "sá»‘ 21 " , Gia :100 , TrangThai :false}, 
   {SoGhe :57 ,TenGhe : "sá»‘ 22 " , Gia :100 , TrangThai :false},
    {SoGhe :58 ,TenGhe : "sá»‘ 23 " , Gia :100 , TrangThai :false},
    {SoGhe :59 ,TenGhe : "sá»‘ 24 " , Gia :100 , TrangThai :false}, 
   {SoGhe :60 ,TenGhe : "sá»‘ 25 " , Gia :100 , TrangThai :false}, 
   {SoGhe :61 ,TenGhe : "sá»‘ 26 " , Gia :100 , TrangThai :false}, 
   {SoGhe :62 ,TenGhe : "sá»‘ 27 " , Gia :100 , TrangThai :false},
    {SoGhe :63 ,TenGhe : "sá»‘ 28 " , Gia :100 , TrangThai :false},
    {SoGhe :64 ,TenGhe : "sá»‘ 29 " , Gia :100 , TrangThai :false},
    {SoGhe :65 ,TenGhe : "sá»‘ 30 " , Gia :100 , TrangThai :false}, 
   {SoGhe :66 ,TenGhe : "sá»‘ 31 " , Gia :100 , TrangThai :false}, 
   {SoGhe :67 ,TenGhe : "sá»‘ 32 " , Gia :100 , TrangThai :false},
    {SoGhe :68 ,TenGhe : "sá»‘ 33 " , Gia :100 , TrangThai :false}, 
   {SoGhe :69 ,TenGhe : "sá»‘ 34 " , Gia :100 , TrangThai :false},
    {SoGhe :70 ,TenGhe : "sá»‘ 35 " , Gia :100 , TrangThai :false},
    {SoGhe : 71 ,TenGhe : "sá»‘ 1 " , Gia :100 , TrangThai :false}, 
    {SoGhe : 72 ,TenGhe : "sá»‘ 2 " , Gia :100 , TrangThai :false},
     {SoGhe : 73 ,TenGhe : "sá»‘ 3 " , Gia :100 , TrangThai :false}, 
    {SoGhe : 74 ,TenGhe : "sá»‘ 4 " , Gia :100 , TrangThai :false},
     {SoGhe : 75 ,TenGhe : "sá»‘ 5 " , Gia :100 , TrangThai :false},
     {SoGhe : 76 ,TenGhe : "sá»‘ 6 " , Gia :100 , TrangThai :false}, 
    {SoGhe : 77 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false}, 
    {SoGhe : 78 ,TenGhe : "sá»‘ 7 " , Gia :100 , TrangThai :false},
     {SoGhe : 79 ,TenGhe : "sá»‘ 9 " , Gia :100 , TrangThai :false},
     {SoGhe :80 ,TenGhe : "sá»‘ 10 " , Gia :100 , TrangThai :false}, 
    {SoGhe :81 ,TenGhe : "sá»‘ 11 " , Gia :100 , TrangThai :false},
     {SoGhe :82 ,TenGhe : "sá»‘ 12 " , Gia :100 , TrangThai :false}, 
    {SoGhe :83 ,TenGhe : "sá»‘ 13 " , Gia :100 , TrangThai :false}, 
    {SoGhe :84 ,TenGhe : "sá»‘ 14 " , Gia :100 , TrangThai :false},
     {SoGhe :85 ,TenGhe : "sá»‘ 15 " , Gia :100 , TrangThai :false},
    //  {SoGhe :86 ,TenGhe : "sá»‘ 16 " , Gia :100 , TrangThai :false},
    //  {SoGhe :87 ,TenGhe : "sá»‘ 17 " , Gia :100 , TrangThai :false}, 
    // {SoGhe :88 ,TenGhe : "sá»‘ 18 " , Gia :100 , TrangThai :false},
    //  {SoGhe :89 ,TenGhe : "sá»‘ 19 " , Gia :100 , TrangThai :false},
    //  {SoGhe :90 ,TenGhe : "sá»‘ 14 " , Gia :100 , TrangThai :false},
    //  {SoGhe :91 ,TenGhe : "sá»‘ 15 " , Gia :100 , TrangThai :false},
    //  {SoGhe :92 ,TenGhe : "sá»‘ 16 " , Gia :100 , TrangThai :false},
    //  {SoGhe :93 ,TenGhe : "sá»‘ 17 " , Gia :100 , TrangThai :false}, 
    // {SoGhe :94,TenGhe : "sá»‘ 18 " , Gia :100 , TrangThai :false},
    //  {SoGhe :95 ,TenGhe : "sá»‘ 19 " , Gia :100 , TrangThai :false},
    //  {SoGhe :96 ,TenGhe : "sá»‘ 15 " , Gia :100 , TrangThai :false},
    //  {SoGhe :97 ,TenGhe : "sá»‘ 16 " , Gia :100 , TrangThai :false},
    //  {SoGhe :98 ,TenGhe : "sá»‘ 17 " , Gia :100 , TrangThai :false}, 
    // {SoGhe :99,TenGhe : "sá»‘ 18 " , Gia :100 , TrangThai :false},
    //  {SoGhe :100 ,TenGhe : "sá»‘ 19 " , Gia :100 , TrangThai :false},
   
    ]
  public numberChoice :number = 0;
  public number :number = this.danhSachGhe.length ;
  public list = [];

  constructor(private _activate: ActivatedRoute, private phimsv : PhimsvService) { }
  // bắt sự kiện stt và ghe từ gheiteam
  choiceList(e){
   if(e.stt){
    this.numberChoice ++;
    this.number --;
    this.list.push(e.ghe);
   }
   else{
     this.numberChoice --;
     this.number ++;
     let index = this.list.findIndex(iteam => iteam.SoGhe === e.SoGhe);
     if(index !== -1){
       this.list.splice(index,1);
     }
   }
  }
  datVe(){
    Swal.fire({
      position: 'top-center',
      type: 'success',
      title: 'Đặt ghế thành công',
      showConfirmButton: false,
      timer: 2500
    })
  }
  ngOnInit() {
    if(localStorage){
      this.tongTien = localStorage.getItem('TongTien');
    }
    this._activate.queryParams.subscribe(
      (res) =>{
        this.maPhim = res.maPhim;
        // console.log(this.maPhim);
        this.phimsv.layChiTietPhim(this.maPhim).subscribe(
          (res) =>{
            this.phim = res;
            // console.log(1);
          }
        )
      },
      (err) =>{
        console.log(err);
      }
    )

  }

}
