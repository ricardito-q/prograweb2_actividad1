import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto.models';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardproductos',
  standalone: true,
  imports: [CardproductoTarjetaComponent, CommonModule],
  templateUrl: './cardproductos.component.html',
  styleUrl: './cardproductos.component.css'
})
export class CardproductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private _productoService: ProductosService, private router: Router) {}

  ngOnInit(): void {
    this.productos = this._productoService.getProductos();
    console.log(this.productos);
  }

  verProducto(idx: number) {
    // Implementa la lógica para ver el producto
  }
}
