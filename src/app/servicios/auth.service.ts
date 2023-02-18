import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor( private http: HttpClient, private router: Router) {  }


  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`http://localhost:3000/auth/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/admin']);
          return res;
        }),
        catchError((err) => this.Error(err))
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  private Error(err:any): Observable<never> {
    let errorMessage = '';
    if (err) {  errorMessage = 'Credenciales no validas';  }
    window.alert(errorMessage);
    this.router.navigate(['/login']);
    return throwError(errorMessage);
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = vto.isTokenExpired(userToken);
    if (isExpired) { this.logout(); }
  }


}


    
  
  


