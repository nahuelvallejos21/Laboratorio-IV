import { Component, OnInit, Output, Input } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseService} from '../../core/servicios/firebase.service'
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  logueado : boolean = false;
  mostrarAlerta : boolean = false;
  mostrarAlerta2 : boolean = false;
  constructor(private miServicio : FirebaseService , private router : Router) { 
     this.logueado = FirebaseService.logueado;
  }

  ngOnInit() {
  }
  irJugar(){
    if(this.logueado){
      this.router.navigate(['/juegos']);
    }
    else{
      console.log("DEBE ESTAR LOGUEADO PARA INGRESAR A LOS JUEGOS");
      this.mostrarAlerta = true;
    
      
    }
  }
  cerrar(){
    this.mostrarAlerta = false;
    this.mostrarAlerta2 = false;
  }
  irLista(){
    if(this.logueado){
      this.router.navigate(['/lista']);
    }
    else{
      console.log("DEBE ESTAR LOGUEADO PARA INGRESAR A LOS JUEGOS");
      this.mostrarAlerta2 = true;
    
      
    }
  }

}
