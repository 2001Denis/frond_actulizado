import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
   
  conceptos : any;
  habilidades :  any = 
      { 
        html: null, 
        css: null,
        javaScript: null, 
        angular: null,
        mysql: null, 
        php: null,
        java: null, 
        springBoot: null,
        typeScript: null
      };
  item : any;
  @Input()
  isLogged : boolean | undefined;

  constructor(  private datosPorfolio: PorfolioService, 
                private modalService: NgbModal  )
                {  }

  ngOnInit() {
    this.datosPorfolio.obtenerDatos().subscribe( data => {
        this.conceptos = data.perfil.conceptos;

        this.habilidades.html = data.habilidades.html;
        this.habilidades.css = data.habilidades.css;
        this.habilidades.javaScript = data.habilidades.javaScript;
        this.habilidades.mysql = data.habilidades.mysql;
        this.habilidades.php = data.habilidades.php;
        this.habilidades.java = data.habilidades.java;
        this.habilidades.springBoot = data.habilidades.springBoot;
        this.habilidades.angular = data.habilidades.angular;
        this.habilidades.typeScript = data.habilidades.typeScript;
    });
  }
  
  mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }

  save (){
    console.log("update habilidades: ", this.habilidades);
  }
}


