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
  indice: any;

  @Input()
  isLogged : boolean | undefined;

  constructor( private datosPorfolio: PorfolioService, 
               private modalService: NgbModal )
               { }

  ngOnInit() {
      this.datosPorfolio.obtenerDatos().subscribe( data => {
      this.certificadosList = data.certificados;
     });
  }
  mostrarModal( data: any, modalProyecto: any , indice: number){
    this.item = data;
    this.indice = indice;
    this.modalService.open(modalProyecto);
    console.log("--update objeto nro: ",indice);
  }

  mostrarModalEliminar( data: any, modalProyectoEliminar: any , indice: number ){
    this.item = data;
    this.indice = indice;
    this.modalService.open(modalProyectoEliminar);
    
  }

  save (){
    console.log("update certificados ----------------------------");
    console.log (this.certificadosList);
  }

  eliminar ( ){
 
  }
}
