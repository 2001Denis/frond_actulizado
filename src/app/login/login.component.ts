import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit{
 
  

  constructor(
    private authd : AuthService, 
    public router: Router, 
    private formB : FormBuilder
    ) {}

  ngOnInit(): void{

    const userData={
      username: "denisagustina@hotmail.com",
      password: "yoprogramo"
    }

    this.authd.login(userData).subscribe(res => console.log(res));
  }
}