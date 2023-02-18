import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-update-perfil',
  templateUrl: './update-perfil.component.html',
  styleUrls: ['./update-perfil.component.css']
})
export class UpdatePerfilComponent implements OnInit{
  
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
