import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto, Url, httpOptions} from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor( private http: HttpClient) { }


  obtenerProyectos (): Observable<any>{
    return this.http.get(`${Url.Api}/proyecto/ver`);
  }

  altaProyecto(proyecto: Proyecto): Observable<any | void> {
    return this.http.post<any>(`${Url.Api}/proyecto/nuevo`, proyecto, httpOptions);
  }

  updateProyecto(proyecto: Proyecto): Observable<any | void> {
    return this.http.put<any>(`${Url.Api}/proyecto/editar/`+ proyecto.idProyectos, proyecto, httpOptions);
  }

  deleteProyecto(proyecto: Proyecto): Observable<any | void> {
    return this.http.delete<any>(`${Url.Api}/proyecto/borrar/`+ proyecto.idProyectos );
  }


}