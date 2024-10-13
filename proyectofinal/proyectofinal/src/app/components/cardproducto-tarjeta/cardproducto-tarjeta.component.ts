import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule si es necesario

@Component({
  selector: 'app-cardproducto-tarjeta',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule aquí si estás usando pipes como `currency`
  templateUrl: './cardproducto-tarjeta.component.html',
  styleUrls: ['./cardproducto-tarjeta.component.css']
})
export class CardproductoTarjetaComponent implements OnInit {

  @Input() producto: any = {};
  @Input() index: number = 0;
  @Output() productoSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.productoSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verProducto() {
    this.router.navigate(['/producto', this.index]);
  }
}
