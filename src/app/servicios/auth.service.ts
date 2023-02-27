import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interface';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private http: HttpClient, private router: Router) {  }


  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`http://localhost:3000/auth/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          console.log(res);
          localStorage.setItem('token', res.token);
          localStorage.setItem('expira', " 1 hora");
          this.router.navigate(['/']);
          return res;
        }),
        catchError((err) => this.ErrorLogin(err))
      );
  }

   private ErrorLogin(err:any): Observable<never> {
    let errorMessage = '';
    if (err) {  errorMessage = err.status }
    this.router.navigate(['/login']);
    return throwError(errorMessage);
  }


  
 
}


    
  
  


