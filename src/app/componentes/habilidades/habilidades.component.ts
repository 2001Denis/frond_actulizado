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
  habilidades : any;
  item : any;
  @Input()
  isLogged : boolean | undefined;

  constructor(  private datosPorfolio: PorfolioService, 
                private modalService: NgbModal  )
                {  }

  ngOnInit() {
    this.datosPorfolio.obtenerDatos().subscribe( data => {
        this.conceptos = data.perfil.conceptos;
        this.habilidades = data.habilidades;
      });
  }
  
  mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }

  save (){
    console.log("update habilidades ----------------------------");
    console.log (this.habilidades);
  }
}


