import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-certificado',
  templateUrl: './update-certificado.component.html',
  styleUrls: ['./update-certificado.component.css']
})
export class UpdateCertificadoComponent implements OnInit {

  item : any;
  certificadosList : any;

  constructor(private datosPorfolio: PorfolioService, private modalService: NgbModal){}

  ngOnInit() {
    this.datosPorfolio.obtenerDatos().subscribe( data => {
      this.certificadosList = data.certificados;
     });
   }

   mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }

  mostrarModalEliminar( data: any, modalProyectoEliminar: any ){
    this.item = data;
    this.modalService.open(modalProyectoEliminar);
  }

}
