import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad, Url, httpOptions} from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor( private http: HttpClient) { }

  obtenerHabilidades (): Observable<any>{
    return this.http.get(`${Url.Api}/experiencia/ver`);
  }

  updateHabilidad(habilidad: Habilidad): Observable<any | void> {
    return this.http.put<any>(`${Url.Api}/experiencia/editar/`+ habilidad.idExperiencia, habilidad, httpOptions);
  }




}