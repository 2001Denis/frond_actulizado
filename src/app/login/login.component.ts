import { Component } from "@angular/core";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
 
  logeado : string = "";
  isLogged : boolean | undefined;

  form: any = 
      { 
        username: null, 
        password: null  
      };
  errorMessage : string = "";
  error : boolean = false;
  
  constructor( public auth : AuthService ) {}
 
  Entrar( ){

     this.auth.login(this.form).subscribe({
      next: data => {
        this.logeado = "Modo edicion";
        this.isLogged = true;
       },
      error: err => {
        this.isLogged = false;
        this.errorMessage = "Credenciales incorrectas. Vuelva a internerlo.";
        this.error = true;
      }
    });
 }


}