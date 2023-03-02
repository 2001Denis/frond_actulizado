import { Component, Input } from '@angular/core';
import { window } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   
   @Input()
   isLogged : boolean | undefined;
  
   constructor(private auth : AuthService){ 
   
    }
 
   public salir():void{

    window(this.auth.isLogged);
    console.log("fggffgfgfgfgfgfgfgfgfgf");
     this.auth.logout;
   }
   
}
