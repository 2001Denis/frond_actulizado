import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User, UserResponse } from '../interfaces/user.interface';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Url } from '../interfaces/portafolio.interface';

const vto = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})

export class AuthService {

   loggedIn = new BehaviorSubject<boolean>(false);

  constructor( private http: HttpClient, private router: Router) { 

    this.checkToken();
   }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${Url.Api}/auth/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          localStorage.setItem('token', res.token);
          localStorage.setItem('expira', "1 hora");
          this.loggedIn.next(true);
          this.router.navigate(['/']);
          return res;
        }),
     );
  }


  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    
  }
  
   checkToken(): boolean {
    const userToken = localStorage.getItem('token');
    const isExpired = vto.isTokenExpired(userToken);
    if (isExpired) {  
      this.logout();
      return false;
    }else{
      this.loggedIn.next(true);
      return true;
    }
  }
 
}


    
  
  


