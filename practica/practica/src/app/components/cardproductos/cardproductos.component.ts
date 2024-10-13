import { Component, OnInit } from '@angular/core';
import { producto } from '../../models/producto.models';
import { productosservice } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CardproductoTarjetaComponent,CommonModule],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {
productos: producto[]=[];
constructor(private _productoService:productosservice,
  private router:Router
){}
  ngOnInit(): void {
  this.productos=this._productoService.getproductos();
  console.log(this.productos)  ;
  }
  verProducto(idx:number){
    
  }
}
