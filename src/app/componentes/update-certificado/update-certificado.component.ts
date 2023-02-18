import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-update-certificado',
  templateUrl: './update-certificado.component.html',
  styleUrls: ['./update-certificado.component.css']
})
export class UpdateCertificadoComponent implements OnInit {

  certificadosList : any;

  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit() {
    
    this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.certificadosList = data.certificados;
     
    });
 

  }

}
