import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
 
  item : any;
  proyectosList : any;

  @Input()
  isLogged : boolean | undefined;

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
    
    save (item : any){
      console.log("update proyecto : ", item);
    }

    delete (item : any){
      console.log("delete proyecto : ", item);
    }

}
