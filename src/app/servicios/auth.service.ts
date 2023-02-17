import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const vto = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  public loggedIn = false;
  

  constructor( private http: HttpClient, private router: Router) {
    this.checkToken();
   }

  
 
  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`http://localhost:3000/auth/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          this.saveLocalStorage(res);
          this.loggedIn = true;
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }

  private saveLocalStorage(user: UserResponse): void {
    const { userId, message, ...rest } = user;
    localStorage.setItem('token', JSON.stringify(rest));
  }

  private handlerError(err:any): Observable<never> {
    let errorMessage = 'A ocurrido un error en auth.service.ts';
    if (err) {
      errorMessage = `Error numero ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  
  private checkToken(): void {

    const userToken = localStorage.getItem('user');

    console.log("token ---------------------------",userToken);
   

    const isExpired = vto.isTokenExpired(userToken);
    this.loggedIn =true;

   // this.logout();
   
        /*
            if (isExpired) {
              this.logout();
            }else {
              this.loggedIn.next(true);
            }
        */
                //console.log("desde auth.service.ts recupero localstorage");
                //console.log(userToken);
                //console.log("vencio el token ->" );
                //console.log(isExpired );
  }


}


    
  
  


