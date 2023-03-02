import { Component } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent  {
  
  isLogged : boolean;

  constructor( private admin : AuthService ){
    this.isLogged = this.admin.checkToken();
    console.log( this.isLogged);
  }
}