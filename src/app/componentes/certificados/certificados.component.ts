import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})

export class CertificadosComponent implements OnInit{
 
  item : any;
  certificadosList : any;

  @Input()
  isLogged : boolean | undefined;

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
