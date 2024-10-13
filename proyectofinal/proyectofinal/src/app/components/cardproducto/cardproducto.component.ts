
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './cardproducto.component.html',
  styleUrls: ['./cardproducto.component.css']
})
export class CardproductoComponent implements OnInit {

  producto: any = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private _productosService: ProductosService
  ) {}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id') || '0';
    this.producto = this._productosService.getProducto(parseInt(id));
  }
}



