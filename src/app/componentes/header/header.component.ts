import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isAdmin = this.admin.loggedIn;
  

  salir (){
    this.admin.logout;
  }

  constructor( private admin : AuthService ){  }

}
