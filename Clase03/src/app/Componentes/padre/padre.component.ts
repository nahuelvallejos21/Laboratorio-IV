import { Component, OnInit } from '@angular/core';
import {Persona} from 'src/app/Clases/persona';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  constructor(private user: UserService) { }
  listado= new Array();
  mostrar : boolean;
  ngOnInit() {
    console.log(this.user);
  }
  CargarDatos(persona : Persona){
    console.log(persona);
    this.mostrar = true;
    this.listado.push(persona);
    this.user.setLista(this.listado)
    console.log(this.user);

  }
}
