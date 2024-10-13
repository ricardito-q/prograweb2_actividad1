import { Component, OnInit } from '@angular/core';
import { ProcedureParam } from '../pages/models/procedureparam';
import { Spaciente } from '../pages/services/paciente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listapaciente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listapaciente.component.html',
  styleUrl: './listapaciente.component.css'
})
export class ListapacienteComponent implements OnInit {
  procedureParam : ProcedureParam = new ProcedureParam();
  pacientes: any[] = [];
  constructor(private paciente:Spaciente){}
  ngOnInit(): void {
    
    this.procedureParam.inicia();    
    this.procedureParam.pCampo0='Cnombre';
    this.procedureParam.pValor0='a';
    // Cnombre => C = like nombre=nombrecolumna (where like nombre '%%')
    // Nidpaciente=> N = idpaciente=nombrecolumna(where idpaciente=1)
    console.log('1');
    this.paciente.selPaciente(this.procedureParam)
      .subscribe((resp:any) => {
        this.pacientes = resp;

      });

  }
}
