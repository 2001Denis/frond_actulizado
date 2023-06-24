import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado, Url, httpOptions } from '../interfaces/portafolio.interface';

@Injectable({
  providedIn: 'root'
})
export class CertificadosService {

  constructor( private http: HttpClient) { }

  obtenerCertificados (): Observable<any>{
    return this.http.get(`${Url.Api}/educacion/ver`);
  }

  altaCertificado(certificado: Certificado): Observable<any | void> {
    return this.http.post<any>(`${Url.Api}/educacion/nuevo`, certificado, httpOptions);
  }

  updateCertificado(certificado: Certificado): Observable<any | void> {
    return this.http.put<any>(`${Url.Api}/educacion/editar/`+ certificado.idEducacion, certificado, httpOptions);
  }

  deleteCertificado(certificado: Certificado): Observable<any | void> {
    return this.http.delete<any>(`${Url.Api}/educacion/borrar/`+ certificado.idEducacion );
  }




  }