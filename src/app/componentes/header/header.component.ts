import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const vto = new JwtHelperService();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

   isExpired : boolean;
   mensaje : any;

   @Input()
   isLogged : boolean | undefined;
   logeado : string | undefined;

  


   constructor( private router: Router ){ 


    const userToken = localStorage.getItem('token');
    this.isExpired = vto.isTokenExpired(userToken);

    //<a href="" routerLink="/login" *ngIf="isExpired" class="linkedin" ><i class="filter-web"></i>Entrar</a>
   // <a href="" routerLink="/home"  *ngIf="!isExpired" class="linkedin" ><i class="filter-web"></i>Salir</a>

    }
   

    salir(){
      this.isLogged = false;
    }
     

}
