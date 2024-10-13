import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ValidadoresService } from '../services/validadores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent implements OnInit {
  forma: FormGroup = this.fb.group({});
  constructor(private fb: FormBuilder, private validadores: ValidadoresService) {
    this.crearFormulario();
  }
  ngOnInit(): void { }
  crearFormulario() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, this.validadores.noEjemplo]],
      usuario: ['', , this.validadores.existeUsuario]
    })
  }
  get nombreNoValido() {
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }
  get usuarioNoValido() {
    return this.forma.get('usuario')?.invalid && this.forma.get('usuario')?.touched;
  }
  get apellidoNoValido() {
    return this.forma.get('apellido')?.invalid && this.forma.get('apellido')?.touched;
  }
  guardar() {

  }
}
