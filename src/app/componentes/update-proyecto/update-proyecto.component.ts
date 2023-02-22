import { Component, OnInit, Output } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit{

  proyectosList : any;

  // pasar al hijo - modificar este proyecto
  

  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit() {
    
    this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.proyectosList = data.proyectos;
    
    });
 

  }

}
