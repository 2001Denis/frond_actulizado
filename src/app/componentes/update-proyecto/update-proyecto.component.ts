import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit{

  proyectosList : any;

  constructor(private datosPorfolio: PorfolioService){}

  ngOnInit() {
    
    this.datosPorfolio.obtenerDatos().subscribe( data => {
     
      this.proyectosList = data.proyectos;
    
    });
 

  }

}
