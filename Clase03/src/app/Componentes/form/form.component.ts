import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Persona} from 'src/app/Clases/persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()cargar = new EventEmitter<any>();
  datos: Persona;
  miPersona : Persona = {"apellido" : "vallejos" , "nombre" : "nahuel" , "sexo" : "M" , "edad" : 23, "sueldo" : 45000,"licencia" : "NO","fecha" : Date()}
  
  constructor() { }
  //enviado = true;
  ngOnInit() {
  }
  Manejadora(){
    this.datos = new Persona(this.miPersona.nombre,this.miPersona.apellido,this.miPersona.sexo,this.miPersona.sueldo,this.miPersona.licencia,this.miPersona.fecha,this.miPersona.edad);
    this.cargar.emit(this.datos);
    //this.enviado = !this.enviado;
  }

}
