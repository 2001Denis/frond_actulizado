import { Component } from "@angular/core";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
 

   form: any = {
    username: null,
    password: null
  };

  constructor( public auth : AuthService ) {}
 
  Entrar( ){

     this.auth.login(this.form).subscribe ( res => console.log(res));
   
  }
}