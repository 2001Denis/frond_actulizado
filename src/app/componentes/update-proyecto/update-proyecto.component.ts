import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-proyecto',
  templateUrl: './update-proyecto.component.html',
  styleUrls: ['./update-proyecto.component.css']
})
export class UpdateProyectoComponent implements OnInit{

  proyectosList : any;

   @ViewChild("myModalConf", {static: false}) myModalConf: TemplateRef<any> | undefined;
  

  constructor(private datosPorfolio: PorfolioService, private modalService: NgbModal){}

  ngOnInit() {
     this.datosPorfolio.obtenerDatos().subscribe( data => {
          this.proyectosList = data.proyectos;
     });
  }
 
  mostrarModalConf(){
    this.modalService.open(this.myModalConf).result.then( r => {
      console.log("Tu respuesta ha sido: " + r);
    }, error => {
      console.log(error);
    });
  }



}
