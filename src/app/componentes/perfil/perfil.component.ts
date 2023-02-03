import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{

  correo : any;
  celular : any;
  ciudad : any;
  edad : any;
  ocupacion : any;
  trabajo : any;

  constructor( private datosPorfolio : PorfolioService) {  }

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

}
