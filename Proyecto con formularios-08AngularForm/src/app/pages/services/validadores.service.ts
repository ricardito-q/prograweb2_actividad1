import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { rejects } from 'assert';
import { resolve } from 'path';
import { Observable } from 'rxjs';

interface ErrorValidate { [s: string]: boolean }

@Injectable({ providedIn: 'root' })
export class ValidadoresService {
    constructor() { }
    existeUsuario(control: FormControl):
        Promise<ErrorValidate> | Observable<ErrorValidate> {
        if (!control.value) {
            return Promise.resolve({} as ErrorValidate);
        }
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'David') {
                    resolve({ existe: true });
                } else {
                    resolve({} as ErrorValidate);
                }
            }, 4000);
        })
    }

    noEjemplo(control: FormControl):ErrorValidate{
        if(control.value?.toLowerCase()==='ejemplo'){
            return {
                noEjemplo:true
            }
        }
        return {} as ErrorValidate;
    }

}