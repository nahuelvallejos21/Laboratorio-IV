import { Component, OnInit, Output } from '@angular/core';
import { FacultadService } from 'src/app/servicios/facultad.service';
import { Entidad } from 'src/app/modals/entidad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  entidadLogueada : Entidad = {correo : "" , clave : "" , perfil : ""};
  perfil: string;
  constructor(private facultadService : FacultadService) { }

  ngOnInit() {
    this.facultadService.usuarios().subscribe(data =>{
      console.log(data);
      data.forEach(element=>{
         if(element.correo == localStorage.getItem("usuario_logueado")){
            this.entidadLogueada = element;
            console.log(this.entidadLogueada);
         }
      })
   })
  }
  cambiarPerfil(event){
    this.perfil = event;
  }

}
