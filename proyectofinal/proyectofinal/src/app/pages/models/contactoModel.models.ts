export class ContactoModel {
    idcontactobasico: number;
    nombre: string;
    email: string;
    telefono: string;
    asunto: string;
    fecharegistro: Date;
    estadoregistro: boolean;

    constructor() {
        this.idcontactobasico = 0;
        this.nombre = '';
        this.email = '';
        this.telefono = '';
        this.asunto = '';
        this.fecharegistro = new Date();
        this.estadoregistro = false;
    }
}
