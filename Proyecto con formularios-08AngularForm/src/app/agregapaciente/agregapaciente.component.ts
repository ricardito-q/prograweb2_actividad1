import { Component, NgModule, OnInit } from '@angular/core';
import { PacienteModel } from '../pages/models/pacienteModel.models';
import { Spaciente } from '../pages/services/paciente.service';
import { copyFileSync } from 'fs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregapaciente',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './agregapaciente.component.html',
  styleUrl: './agregapaciente.component.css'
})
export class AgregapacienteComponent implements OnInit {
  pacienteModel: PacienteModel = new PacienteModel();
  constructor(private spaciente: Spaciente) { }
  ngOnInit(): void {
    console.log('esta en agrega paciente');
    
  }

  guardar(forma: NgForm) {
    // this.pacienteModel.idpaciente=5;
    // this.pacienteModel.nombre='Felix';
    // this.pacienteModel.apellido='Guzman';
    
    this.spaciente.addPaciente(this.pacienteModel)
    .subscribe((resp) => {
      console.log('se registro el paciente');
      Swal.fire({
        allowOutsideClick: false,
        title: 'Confirmación',
        text: 'Se registro el paciente correctamente',
      });
    });
  }

}
