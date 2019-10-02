import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FirebaseService} from '../../core/servicios/firebase.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   usuario = {
    correo_nick : "",
    clave : ""
  }
  mostrarForm : boolean = true;
  mostrarAlerta : boolean = false;
  constructor(private miServicio : FirebaseService,private router:Router) { }

  ngOnInit() {
  }
  login(){
     
     console.log(this.usuario)
     if(this.miServicio.verificarCorreoNick(this.usuario.correo_nick,this.usuario.clave)){
        let obj = {
          nick : this.miServicio.traerNick(this.usuario.correo_nick),
          logueado : true
        }
        FirebaseService.logueado = obj.logueado;
        FirebaseService.nick = obj.nick;
        
        this.router.navigate(['/'])
     }
     else{
       console.log("Ingreso mal los datos");
       this.mostrarAlerta = true;
     }
  }
  cerrar(){
    this.mostrarAlerta = false;
  }

}
