import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-perfil',
  templateUrl: './update-perfil.component.html',
  styleUrls: ['./update-perfil.component.css']
})
export class UpdatePerfilComponent implements OnInit{
  
  item : any;
  correo : any;
  celular : any;
  ciudad : any;
  edad : any;
  ocupacion : any;
  trabajo : any;

  constructor( private datosPorfolio : PorfolioService, private modalService: NgbModal) {  }

  ngOnInit() {
    
     this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.correo = data.perfil.correo;
      this.celular = data.perfil.celular;
      this.ciudad = data.perfil.ciudad;
      this.edad = data.perfil.edad;
      this.ocupacion = data.perfil.ocupacion;
      this.trabajo = data.perfil.trabajo;

     });
  }

  mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }
}
