import { Component } from '@angular/core';
import { AuthService } from '../../servicios/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  isAdmin: boolean = true;

  constructor( private admin : AuthService ){  }
  
  salir (){  
    this.admin.logout;
  }
}
