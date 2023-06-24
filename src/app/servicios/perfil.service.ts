import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil, Url, httpOptions } from '../interfaces/portafolio.interface';



@Injectable({
  providedIn: 'root'
})

export class PerfilService {

  constructor( private http: HttpClient) { }

  obtenerPerfil (): Observable<any>{
    return this.http.get(`${Url.Api}/persona/ver`);
    // return this.http.get(`https://api-portafolio-denise.onrender.com/persona/ver`);
  }

  updatePerfil(perfil: Perfil): Observable<any | void> {
      return this.http.put<any>(`${Url.Api}/persona/editar/`+ perfil.id, perfil, httpOptions);
  }

 

}