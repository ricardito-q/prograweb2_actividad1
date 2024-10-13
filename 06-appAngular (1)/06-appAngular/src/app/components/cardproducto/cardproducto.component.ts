
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-cardproducto',
  standalone: true,
  imports: [],
  templateUrl: './cardproducto.component.html',
  styleUrl: './cardproducto.component.css'
})
export class CardproductoComponent implements OnInit {

  producto: any=[];
  constructor(private activateRoute:ActivatedRoute
    ,private _productosService:ProductosService
  ){}

  ngOnInit(): void {
    const id=this.activateRoute.snapshot.paramMap.get('id')||'0';
    this.producto = this._productosService.getProducto(parseInt(id));
   
    // console.log(this.producto);
    
  }

}


