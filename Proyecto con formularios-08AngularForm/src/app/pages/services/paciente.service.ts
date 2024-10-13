import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProcedureParam } from '../models/procedureparam';
import { CommonModule, DatePipe } from '@angular/common';
import { PacienteModel } from '../models/pacienteModel.models';

const apiUlr = 'https://disweb.jokamaliva.com/jhe/';// environment.apiUlr;
const apiid = '';// environment.apiid;
const apillave = '';// environment.apillave;
@Injectable({ providedIn: 'root' })
export class Spaciente {
    constructor(private http: HttpClient, public datepipe: DatePipe) { }
    // oficina: OficinaModel = new OficinaModel;
    //select
    selPaciente(procedureParam: ProcedureParam) {
        console.log('1');
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        body = body.set('idusuario', '1');
        body = body.set('llave', '2');
        //parametros
        body = body.set('pCampo0', procedureParam.pCampo0);
        body = body.set('pValor0', procedureParam.pValor0);
        body = body.set('pCampo1', procedureParam.pCampo1);
        body = body.set('pValor1', procedureParam.pValor1);
        body = body.set('pCampo2', procedureParam.pCampo2);
        body = body.set('pValor2', procedureParam.pValor2);
        body = body.set('pCampo3', procedureParam.pCampo3);
        body = body.set('pValor3', procedureParam.pValor3);
        body = body.set('pCampo4', procedureParam.pCampo4);
        body = body.set('pValor4', procedureParam.pValor4);
        body = body.set('pCampo5', procedureParam.pCampo5);
        body = body.set('pValor5', procedureParam.pValor5);
        body = body.set('pCampo6', procedureParam.pCampo6);
        body = body.set('pValor6', procedureParam.pValor6);
        body = body.set('pCampo7', procedureParam.pCampo7);
        body = body.set('pValor7', procedureParam.pValor7);
        //realizar consulta
        return this.http.post(apiUlr + 'selpaciente', body)
            .pipe(map((resp: any) => {
                console.log(resp);
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else { console.log('error coneccion'); return null; }
            }));
    }

    addPaciente(paciente: PacienteModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data')
        let body = new HttpParams();
        // body = body.set('idusuario', localStorage.getItem('parmid') || '');
        // body = body.set('llave', localStorage.getItem('parmtoken') || '');
        //parametros
        body = body.set('pidpaciente', paciente.idpaciente.toString());
         body = body.set('pnombre', paciente.nombre.toString()); 
         body = body.set('papellido', paciente.apellido.toString());
         body = body.set('pfecha_nacimiento', this.datepipe.transform(paciente.fecha_nacimiento, 'yyyy-MM-dd') || '');
         // thu march 01 of 2024
         body = body.set('pgenero', paciente.genero.toString());
         body = body.set('ptelefono', paciente.telefono.toString());
         body = body.set('pdireccion', paciente.direccion.toString());
         body = body.set('pcorreo', paciente.correo.toString());

        return this.http.post(apiUlr + 'addPaciente', body)
            .pipe(map((resp: any) => {
                console.log('respuesta');
                console.log(resp);
                if (resp['info'] != null) {
                    if (resp['mesaje'] != null) {
                        return resp['info'].item;
                    }
                    else {
                        console.log('FAILD');
                        return null;
                    }
                }
                else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
}
