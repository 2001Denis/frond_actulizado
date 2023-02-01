import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credenciales = new FormGroup({
    email : new FormControl,
    password : new FormControl

  });

  validarCredencialess(){

      console.log("llego algo");
  }

}
