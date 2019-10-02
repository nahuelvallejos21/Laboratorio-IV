import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../core/servicios/firebase.service'
import { Usuario } from 'src/app/core/clases/usuario';
import {Router} from '@angular/router'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario : Usuario;
  msjError : string;
  mostrarAlerta : boolean = false;
  constructor(private miServicio : FirebaseService,private route : Router) { 
    this.usuario = {
      id : "",
      anagramaG : 0,
      anagramaP : 0,
      tatetiG : 0,
      tatetiP : 0,
      miJuegoP : 0,
      miJuegoG : 0,
      correo : "",
      clave : "",
      nick : ""
    }
  }

  ngOnInit() {
   
  }
  registrar(){
    if(this.miServicio.verificarExistencia(this.usuario) == 0){
      if(this.miServicio.registrarJugador(this.usuario)){
        console.log("Jugador agregado con exito!");
        this.route.navigate(['/inicio']);

      }
    }
    else if(this.miServicio.verificarExistencia(this.usuario) == 1){
      console.log("Error al registrar el nuevo jugador. Nick ya en uso");
      this.msjError = " .Nick ya en uso"
      this.mostrarAlerta = true;
    }
    else if(this.miServicio.verificarExistencia(this.usuario) == 2){
      console.log("Error al registrar el nuevo jugador. Correo y Nick ya utilizados");

      this.msjError = " .Correo y Nick ya utilizados";
      this.mostrarAlerta = true;
    }
    else{
      console.log("Error al registrar el nuevo jugador. Correo ya en uso");

      this.msjError = " .Correo ya en uso";
      this.mostrarAlerta = true;
    }
  }
  cerrar(){
    this.mostrarAlerta = false;
    console.log("Hola");
  }
}
