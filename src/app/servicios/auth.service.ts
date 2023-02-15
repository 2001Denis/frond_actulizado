import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const vto = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor( private http: HttpClient, private router: Router) {
    this.checkToken();
   }

  
  //login (): void {}
  //logout (): void {}
  private readToken (): void {}
  private saveToken (): void {}

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`http://localhost:3000/auth/login`, authData)
      .pipe(
        map((user: UserResponse) => {
          this.saveLocalStorage(user);
         // this.User.next(user);
          return user;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void {
    //set userIsLogged = false;
    localStorage.removeItem('user');
    //this.user.next(null);
    this.router.navigate(['/home']);
  }

  private saveLocalStorage(user: UserResponse): void {
    const { userId, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private handlerError(err:any): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  
  private checkToken(): void {

    const userToken = localStorage.getItem('user');
    const isExpired = vto.isTokenExpired(userToken);

    console.log("desde auth.service.ts recupero localstorage");
    console.log(userToken);
    console.log("vencio el token ->" );
    console.log(isExpired );
  }


}
    //const user = JSON.parse(userToken) || null;
/*
     //set userIsLogged = false;
    if (user) {
      const isExpired = vto.isTokenExpired(user.token);

      if (isExpired) {
        this.logout();
      } 
      //else {
      //  this.user.next(user);
      //}
*/

    
  
  


