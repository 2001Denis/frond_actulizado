import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{

  proyectosList : any;

  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit() {
    
    this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.proyectosList = data.proyectos;
    
    });
 

  }

}
