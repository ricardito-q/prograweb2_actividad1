import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { HttpParams } from '@angular/common/http';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardbuscador',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './cardbuscador.component.html',
  styleUrl: './cardbuscador.component.css'
})
export class CardbuscadorComponent implements OnInit{

  productos: any[]=[];
  termino: string=``;
  constructor(private activatedRoute:ActivatedRoute,
    private _productosService:ProductosService){
           
     }

     ngOnInit(){
        this.activatedRoute.params.subscribe( params=> {
          this.termino =params[`termino`];
          this.productos=this._productosService.buscarProductos
          (params[`termino`]);
          console.log(this.productos);
        });
     }

}
