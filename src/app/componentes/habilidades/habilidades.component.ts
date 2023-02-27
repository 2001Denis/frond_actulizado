import { Component, OnInit, Input } from '@angular/core';
import { PorfolioService } from '../../servicios/porfolio.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {
  
  item : any;
  concepto : any;
  valor1 : any;
  valor2 : any;
  valor3 : any;
  valor4 : any;
  valor5 : any;
  valor6 : any;
  valor7 : any;
  valor8 : any;

  @Input()
  isLogged : boolean | undefined;

  constructor( private datosPorfolio: PorfolioService, private modalService: NgbModal  ){  }

  ngOnInit() {
    
      this.datosPorfolio.obtenerDatos().subscribe( data => {
       
        this.concepto = data.habilidades.conceptos;

        this.valor1 = String(data.habilidades.FrondEnd.Angular);
        this.valor2 = String(data.habilidades.FrondEnd.TypeScript);
        this.valor3 = String(data.habilidades.FrondEnd.HTML);
        this.valor4 = String(data.habilidades.FrondEnd.CSS);
        this.valor5 = String(data.habilidades.FrondEnd.JavaScript);
        this.valor6 = String(data.habilidades.BackEnd.SpringBoot);
        this.valor7 = String(data.habilidades.BackEnd.Mysql);
        this.valor8 = String(data.habilidades.BackEnd.Php);

 
      });
  }
  mostrarModal( data: any, modalProyecto: any ){
    this.item = data;
    this.modalService.open(modalProyecto);
  }
}
