import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';
import { PaisService } from '../services/pais.service';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { paisModel } from '../models/pais.models';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent implements OnInit {
  // usuario = {
  //   nombre: 'David',
  //   apellido: 'Serrudo',
  //   correo: 'davidserrudo@gmail.com',
  //   pais: 'BO',
  //   genero: 'M'
  // }
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: ''
  }
  paises: any[] = [];
  constructor(private _paisService: PaisService) { }
  ngOnInit(): void {
    this._paisService.getPaises()
      .subscribe(paises => {
        this.paises = paises;
        // console.log(this.paises);        
        this.paises.unshift({ nombre: '[Seleccione el Pais]', codigo: '' })
      });
  }

  guardar(forma: NgForm) {
    console.log('usuario');
    console.log(this.usuario);
    console.log(forma);
    if (forma.invalid) {
      Object.values(forma.controls).forEach
        (control => {
          control.markAsTouched();
        });
      return;
    }
    // console.log(forma.value);
   
    
  }

  

}
