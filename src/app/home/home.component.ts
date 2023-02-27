import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const vto = new JwtHelperService();


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {

  
  logeado : string = "Desde home";
  isLogged : boolean;
  

  constructor( private admin : AuthService, private router: Router ){

    const userToken = localStorage.getItem('token');
    const isExpired = vto.isTokenExpired(userToken);
    if (isExpired) {  
      this.isLogged = false;
    }else{
      this.isLogged = true;
    }
  }

  
}