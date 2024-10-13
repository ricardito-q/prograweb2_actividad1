export class PacienteModel {
        idpaciente: number;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date = new Date();
    genero: string;
    telefono: string;
    correo: string;
    direccion: string;
    constructor() {
        this.idpaciente = 0;
        this.nombre = '';
        this.apellido = '';
        this.genero = '';
        this.telefono = '';
        this.correo = '';
        this.direccion = '';

    }
}