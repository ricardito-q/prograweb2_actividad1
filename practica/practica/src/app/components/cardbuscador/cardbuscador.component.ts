import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productosservice } from '../../services/productos.service';
import { CardproductoTarjetaComponent } from '../cardproducto-tarjeta/cardproducto-tarjeta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cardbuscador',
  standalone: true,
  imports: [CardproductoTarjetaComponent, CommonModule],
  templateUrl: './cardbuscador.component.html',
  styleUrl: './cardbuscador.component.css'
})
export class CardbuscadorComponent implements OnInit {
  productos: any[] = []
  termino: string = '';
  constructor(private activatedRouter: ActivatedRoute,
    private _productosService: productosservice) { }
  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.termino = params['termino'];
      this.productos = this._productosService.buscarproductos
        (params['termino']);
      console.log(this.productos);
    });
  }
}
