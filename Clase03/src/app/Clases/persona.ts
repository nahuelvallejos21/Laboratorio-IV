export class Persona {
    nombre : string;
    apellido : string;
    sexo : string ;
    sueldo : number;
    licencia : string;
    fecha : string;
    edad : number;

    constructor(nombre:string,apellido:string,sexo : string,sueldo : number,licencia : string,fecha : string,edad:number){
        this.apellido = apellido;
        this.nombre = nombre;
        this.sexo = sexo;
        this.sueldo = sueldo;
        this.licencia = licencia;
        this.fecha = fecha;
        this.edad = edad;
    }
}
