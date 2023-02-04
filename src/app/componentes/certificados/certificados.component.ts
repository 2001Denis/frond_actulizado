import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})

export class CertificadosComponent implements OnInit{

  certificadosList : any;

  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit() {
    
    this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.certificadosList = data.certificados;
     
    });
 

  }

}
