import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor( private datosPorfolio : PorfolioService) {

     // Called first time before the ngOnInit()
  }

  ngOnInit() {
     // Called after the constructor and called  after the first ngOnChanges() 
     this.datosPorfolio.obtenerDatos().subscribe( data => {
      console.log(data);
     });
  }
}