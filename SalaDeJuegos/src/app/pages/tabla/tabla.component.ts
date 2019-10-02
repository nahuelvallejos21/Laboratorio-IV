import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/clases/usuario';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  tipo : string;
  celdas = new Array(9);
  mostrar : boolean = false;
  msj : string;
  disponible = new Array(9);
  jugLogueado;
  bloquear : boolean = false;

  constructor(private miServicio : FirebaseService) { }

  ngOnInit() {
  }
  elegir(tipo : string){
    this.tipo = tipo;
    this.bloquear = true;
  }
  completar(numero : number){
    
    if(this.tipo != null)
    { 
      this.celdas[numero] = this.tipo;
      let flag = 0;

    
        for(let i = 0 ; i<this.celdas.length ; i++){
          let numAl = Math.round(Math.random() * (8 - 0) + 0);
        
          console.log(numAl);
          if(this.celdas[numAl] == null){
            if(this.tipo == "O"){
              this.celdas[numAl] = "X";
              this.disponible[numAl] = true;
            }
            else if(this.tipo == "X"){
             this.celdas[numAl] = "O";
             this.disponible[numAl] = true;
            }
            break;
          }
        }
        this.disponible[numero] = true;
     
      
      
      if(this.celdas[0], this.celdas[1], this.celdas[2] != null){
        if(this.celdas[0] == this.celdas[1] && this.celdas[0] == this.celdas[2] && this.celdas[1] == this.celdas[2])
        {
          if(this.celdas[0] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(0,1,2);
            this.deshabilitarTabla();
           
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(0,1,2);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[3], this.celdas[4], this.celdas[5] != null){
        if(this.celdas[3] == this.celdas[4] && this.celdas[3] == this.celdas[5] && this.celdas[4] == this.celdas[5]){
          if(this.celdas[3] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(3,4,5);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(3,4,5);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[6], this.celdas[7], this.celdas[8] != null){
        if(this.celdas[6] == this.celdas[7] && this.celdas[6] == this.celdas[8] && this.celdas[7] == this.celdas[8]){
          if(this.celdas[6] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(6,7,8);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(6,7,8);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[0], this.celdas[3], this.celdas[6] != null){
        if(this.celdas[0] == this.celdas[3] && this.celdas[0] == this.celdas[6] && this.celdas[3] == this.celdas[6]){
          if(this.celdas[0] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(0,3,6);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(0,3,6);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[1], this.celdas[4], this.celdas[7] != null){
        if(this.celdas[1] == this.celdas[4] && this.celdas[1] == this.celdas[7] && this.celdas[4] == this.celdas[7]){
          if(this.celdas[1] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(1,4,7);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(1,4,7);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[2], this.celdas[5], this.celdas[8] != null){
        if(this.celdas[2] == this.celdas[5] && this.celdas[2] == this.celdas[8] && this.celdas[5] == this.celdas[8]){
          if(this.celdas[2] == this.tipo){//es indistinto comparar con uno o con el otro
             this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(2,5,8);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(2,5,8);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[0], this.celdas[4], this.celdas[8] != null){
        if(this.celdas[0] == this.celdas[4] && this.celdas[0] == this.celdas[8] && this.celdas[4] == this.celdas[8]){
          if(this.celdas[0] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(0,4,8);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(0,4,8);
            this.deshabilitarTabla();
          }
        }
      }
      if(this.celdas[2], this.celdas[4], this.celdas[6] != null){
        if(this.celdas[2] == this.celdas[4] && this.celdas[2] == this.celdas[6] && this.celdas[4] == this.celdas[6]){
          if(this.celdas[2] == this.tipo){//es indistinto comparar con uno o con el otro
            this.mostrar = true;
            this.msj = "Ganaste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiG",FirebaseService.nick);
            this.limpiarTabla2(2,4,6);
            this.deshabilitarTabla();
          }
          else{
            this.mostrar = true;
            this.msj = "Perdiste!";
            setTimeout(() =>{
              this.mostrar = false;
            },2000)
            this.miServicio.insertarCambio("tatetiP",FirebaseService.nick);
            this.limpiarTabla2(2,4,6);
            this.deshabilitarTabla();
          }
        }
      }
    }
    else{
      this.mostrar = true;
      this.msj = "Por favor, elija 'O' o 'X' para iniciar el juego."
      setTimeout(() =>{
        this.mostrar = false;
      },2000)
    }
      

      

    



  }
  limpiar(){
    this.limpiarTabla();
    for(let i = 0;i<this.disponible.length;i++){
      this.disponible[i] = false;
    }
    this.mostrar = false;
    this.tipo = null;
    this.msj = "";
    this.bloquear = false;
  }
  deshabilitarTabla(){
    for(let i = 0;i<this.disponible.length;i++){
      this.disponible[i] = true;
    }
  }
  limpiarTabla(){
    for(let i = 0;i<this.celdas.length;i++){
      this.celdas[i] = null;
    }
  }
  limpiarTabla2(num : number , num2 : number ,num3:number){
    for(let i = 0;i<this.celdas.length;i++){
      if(num != i && num2!=i && num3 != i){
        this.celdas[i] = null;
      }
    }
  }

}
