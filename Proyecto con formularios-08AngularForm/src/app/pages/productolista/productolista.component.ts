import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../models/procedureparam';
import { Sproductosbasico } from '../services/producto.service';
import { DatePipe,CommonModule } from '@angular/common';

@Component({
  selector: 'app-productolista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productolista.component.html',
  styleUrl: './productolista.component.css'
})
export class ProductolistaComponent implements OnInit {
  procedureParam : ProcedureParam = new ProcedureParam();
  productos: any[] = [];
  constructor(private productosbasico:Sproductosbasico){}
  ngOnInit(): void {
    
    this.procedureParam.inicia();    
    // this.procedureParam.pCampo0='Cnombre';
    // this.procedureParam.pValor0='a';
    console.log('1');
    this.productosbasico.selProducto(this.procedureParam)
      .subscribe((resp:any) => {
        this.productos = resp;

      });

  }
}
