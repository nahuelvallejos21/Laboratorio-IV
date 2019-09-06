import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {Persona} from 'src/app/Clases/persona';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()cargar = new EventEmitter<any>();
  datos :Persona;
  nombre : string;
  apellido :string;
  constructor() { }
  enviado = true;
  ngOnInit() {
  }
  Manejadora(){
    this.datos = new Persona(this.nombre,this.apellido);
    this.cargar.emit(this.datos);
    //this.enviado = !this.enviado;
  }

}
