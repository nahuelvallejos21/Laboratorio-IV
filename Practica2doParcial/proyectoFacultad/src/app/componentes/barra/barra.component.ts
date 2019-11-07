import { Component, OnInit, Input } from '@angular/core';
import { Entidad } from 'src/app/modals/entidad';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.scss']
})
export class BarraComponent implements OnInit {
  entidad : Entidad = {correo: "" , clave : "" , perfil : ""};
  constructor() { }

  ngOnInit() {
    this.entidad.correo = localStorage.getItem("usuario_logueado");
  }

}
