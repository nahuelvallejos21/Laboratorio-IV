import { Component, OnInit } from '@angular/core';
import {Persona} from 'src/app/Clases/persona';
@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor() { }
  listado= new Array();
  mostrar : boolean;
  ngOnInit() {
  }
  CargarDatos(persona : Persona){
    console.log(persona);
    this.mostrar = true;
    this.listado.push(persona);
  }
}
