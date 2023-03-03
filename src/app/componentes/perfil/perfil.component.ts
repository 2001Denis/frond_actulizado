import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  perfil: any = 
  { 
    correo: null, 
    celular: null,
    ciudad: null, 
    edad: null,
    ocupacion: null, 
    trabajo: null,
    conceptos: null
  };

  item : any;

  @Input()
   isLogged : boolean | undefined;

  constructor(  private datosPorfolio : PorfolioService, 
                private modalService: NgbModal) 
                {  }

  ngOnInit() {
     this.datosPorfolio.obtenerDatos().subscribe( data => {
          this.perfil.correo = data.perfil.correo;
          this.perfil.celular = data.perfil.celular;
          this.perfil.ciudad = data.perfil.ciudad;
          this.perfil.edad = data.perfil.edad;
          this.perfil.ocupacion = data.perfil.ocupacion;
          this.perfil.trabajo = data.perfil.trabajo;
          this.perfil.conceptos = data.perfil.conceptos;
    });
  }
   
  mostrarModal( data: any, modalProyecto: any ): void{
    this.item = data;
    this.modalService.open(modalProyecto);
  }

  save (){
    console.log("update perfil: ", this.perfil );
  }

  
}
