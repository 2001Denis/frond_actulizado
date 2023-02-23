import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit{

  item : any;
  proyectosList : any;

    constructor(private datosPorfolio: PorfolioService, private modalService: NgbModal){}

  ngOnInit() {
     this.datosPorfolio.obtenerDatos().subscribe( data => {
          this.proyectosList = data.proyectos;
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
