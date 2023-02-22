import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const vto = new JwtHelperService();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor( private router: Router) { 

        const userToken = localStorage.getItem('token');
        const isExpired = vto.isTokenExpired(userToken);
        if (isExpired) {  this.router.navigate(['/home']);}

       // const vencido = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiZGVuaXNhZ3VzdGluYUBob3RtYWlsLmNvbSIsImlhdCI6MTY3Njk5NzY1NSwiZXhwIjoxNjc3MDAxMjU1fQ.HidHR7I9VEGwv4SI5-e6aRaiLFITxSJ76oCtFlqVtLY";
       // const isExpired2 = vto.isTokenExpired(vencido);
       // console.log( `Token en vencido:  ${vencido}`);
       // console.log( `status localStorage:  ${isExpired2}`);
   }



}
