import { Component } from "@angular/core";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
 

  form: any = { username: null, password: null  };
  errorMessage : string = "";
  error : boolean = false;
  
  constructor( public auth : AuthService ) {}
 
  Entrar( ){

     this.auth.login(this.form).subscribe({
      next: data => {
        // window.location.reload();
      },
      error: err => {
        this.errorMessage = "Credenciales incorrectas. Vuelva a internerlo.";
        this.error = true;
      }
    });
 }


}