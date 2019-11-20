import { Component, OnInit } from '@angular/core';
import { NguoidungsvService } from '../service/nguoidungsv.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'
@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  constructor(private _nguoiDung: NguoidungsvService, private _router: Router) { }
  dangKy(form){
    this._nguoiDung.dangKy(form).subscribe(
      res => {
        console.log(res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registration successful ! ',
          showConfirmButton: false,
          timer: 1500
        })
      },
      err =>{
        console.log(err);
        Swal.fire({
          title: 'Error!',
          text: 'Registration failed',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    )
  }



  ngOnInit() {
  }

}
