import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
// import { ProcedureParam } from '../pa/models/procedureparam';

// import { ContactoModel } from '../models/contactoModel.models'; 
import { ContactoModel } from '../pages/models/contactoModel.models';

const apiUlr = 'https://disweb.jokamaliva.com/fatfreeServicio/'; // environment.apiUlr;
const apiid = ''; // environment.apiid;
const apillave = ''; // environment.apillave;

@Injectable({ providedIn: 'root' })
export class Scontacto {
    constructor(private http: HttpClient, public datepipe: DatePipe) { }

    // select
    // selContacto(procedureParam: ProcedureParam) {
    //     const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
    //     let body = new HttpParams();
    //     body = body.set('idusuario', '1');
    //     body = body.set('llave', '2');
    //     // parametros
    //     body = body.set('pCampo0', procedureParam.pCampo0);
    //     body = body.set('pValor0', procedureParam.pValor0);
    //     body = body.set('pCampo1', procedureParam.pCampo1);
    //     body = body.set('pValor1', procedureParam.pValor1);
    //     body = body.set('pCampo2', procedureParam.pCampo2);
    //     body = body.set('pValor2', procedureParam.pValor2);
    //     body = body.set('pCampo3', procedureParam.pCampo3);
    //     body = body.set('pValor3', procedureParam.pValor3);
    //     body = body.set('pCampo4', procedureParam.pCampo4);
    //     body = body.set('pValor4', procedureParam.pValor4);
    //     body = body.set('pCampo5', procedureParam.pCampo5);
    //     body = body.set('pValor5', procedureParam.pValor5);
    //     body = body.set('pCampo6', procedureParam.pCampo0);
    //     body = body.set('pValor6', procedureParam.pValor0);
    //     body = body.set('pCampo7', procedureParam.pCampo0);
    //     body = body.set('pValor7', procedureParam.pValor0);
    //     // realizar consulta
    //     return this.http.post(apiUlr + 'selcontactobasico', body)
    //         .pipe(map((resp: any) => {
    //             if (resp['info'] != null) {
    //                 if (resp['mensaje'] != null) {
    //                     return resp['info'].item;
    //                 } else {
    //                     console.log('FAILD');
    //                     return null;
    //                 }
    //             } else { console.log('error coneccion'); return null; }
    //         }));
    // }

    addContacto(contacto: ContactoModel) {
        const myheader = new HttpHeaders().set('Content-Type', 'application/form-data');
        let body = new HttpParams();
        // body = body.set('idusuario', localStorage.getItem('parmid') || '');
        // body = body.set('llave', localStorage.getItem('parmtoken') || '');
        // parametros
        // body = body.set('pidcontacto', contacto.idcontactobasico.toString());
        body = body.set('pnombre', contacto.nombre.toString());
        body = body.set('pemail', contacto.email.toString());
        body = body.set('ptelefono', contacto.telefono.toString());
        body = body.set('pasunto', contacto.asunto.toString());
        body = body.set('pfecharegistro', this.datepipe.transform(contacto.fecharegistro, 'yyyy-MM-dd') || '');
        body = body.set('pestadoregistro', contacto.estadoregistro ? '1' : '0');

        return this.http.post(apiUlr + 'addcontactobasico', body)
            .pipe(map((resp: any) => {
                console.log('respuesta');
                console.log(resp);
                if (resp['info'] != null) {
                    if (resp['mensaje'] != null) {
                        return resp['info'].item;
                    } else {
                        console.log('FAILD');
                        return null;
                    }
                } else {
                    console.log('error coneccion');
                    return null;
                }
            }));
    }
}
