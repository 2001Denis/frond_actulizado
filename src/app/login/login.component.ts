import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../servicios/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {

  constructor(private authd : AuthService, public router: Router) {}

  ngOnInit(): void{

    const userData={
      username: "denisagustina@hotmail.com",
      password: "yoprogramo1"
    }

    this.authd.login(userData).subscribe(res => console.log(res));
  }
}