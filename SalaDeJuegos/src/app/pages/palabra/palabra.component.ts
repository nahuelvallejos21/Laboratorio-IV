import { Component, OnInit, ɵConsole } from '@angular/core';
import { element } from 'protractor';
import { setTimeout } from 'timers';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.scss']
})
export class PalabraComponent implements OnInit {

  listaPalabras = [{palabra : "VALORA" , anagrama : "ALVARO"},
  {palabra : "RIESGO" , anagrama : "SERGIO"},
  {palabra : "ALEGAN" , anagrama : "ANGELA"},
  {palabra : "AGONISTA" , anagrama : "SANTIAGO"},
  {palabra : "COLINAS" , anagrama : "NICOLAS"},
  {palabra : "CALOR" , anagrama : "CARLO"},
  {palabra : "QUIEREN" , anagrama : "ENRIQUE"},
  {palabra : "PRISA" , anagrama : "PARIS"},
  {palabra : "RIESGO" , anagrama : "SERGIO"},
  {palabra : "PODER" , anagrama : "PEDRO"},
  {palabra : "RAMON" , anagrama : "NORMA"},
  {palabra : "NECROFILA" , anagrama : "FLORENCIA"},
  {palabra : "PODER" , anagrama : "PEDRO"},
  {palabra : "ARMONIA" , anagrama : "MARIANO"},
  {palabra : "MORA" , anagrama : "ROMA"},
  {palabra : "SALARIO" , anagrama : "ROSALIA"},
  {palabra : "SAUNAS" , anagrama : "SUSANA"},
  {palabra : "OVOIDE" , anagrama : "OVIEDO"},
  {palabra : "ARETES" , anagrama : "TERESA"},
  {palabra : "CAMELIA" , anagrama : "MICAELA"},
  {palabra : "VENTILAN" , anagrama : "VALENTIN"},
  {palabra : "ENLODAR" , anagrama : "LEANDRO"},
  {palabra : "TRAMA" , anagrama : "MARTA"},
  {palabra : "DELIRA" , anagrama : "LIDERA"},
  {palabra : "CARDIOGRAFIA" , anagrama : "RADIOGRAFIA"},
  {palabra : "AGRANDA" , anagrama : "GRANADA"},
  {palabra : "DESAMPARADOR" , anagrama : "DESPARRAMADO"},
  {palabra : "LICUA" , anagrama : "LUCIA"},
  {palabra : "CONSERVADORA" , anagrama : "CONVERSADORA"},
  {palabra : "AMOR" , anagrama : "ROMA"},
  {palabra : "IRONICAMENTE" , anagrama : "RENACIMIENTO"},
  {palabra : "NACIONALISTA" , anagrama : "ALTISONANCIA"},
  {palabra : "ESCANDALIZAR" , anagrama : "ZASCANDILEAR"},
  {palabra : "FRASE" , anagrama : "FRESA"},
  {palabra : "ENFRIAMIENTO" , anagrama : "REFINAMIENTO"},
  {palabra : "INTEGRARLA" , anagrama : "INGLATERRA"},
  {palabra : "DEUDORA" , anagrama : "EDUARDO"},
  {palabra : "ACUERDO" , anagrama : "ECUADOR"},
  {palabra : "CALIENTE" , anagrama : "ALICANTE"},
  {palabra : "SACO" , anagrama : "COSA"},
  {palabra : "NEPAL" , anagrama : "PANEL"},
  {palabra : "RAZA" , anagrama : "ZARA"},
  {palabra : "AIRES" , anagrama : "ARIES"},
  {palabra : "MATAR" , anagrama : "MARTA"},
  {palabra : "CAMINO" , anagrama : "MONICA"},
  {palabra : "EL" , anagrama : "LE"}];
   azar;
   respuesta;
   incorrecto:boolean = false;
   correcto:boolean = false;
   mostrar:boolean = false;
   flag = 0;
   ganador: number = 0;
   perdedor : number = 0;
   msj;
   bloquearBoton = false;
   bloquearText = false;
   contador : string;
  constructor(private miServicio : FirebaseService) { 
  }
  ngOnInit() {
    console.log(this.listaPalabras);
     this.obtenerPalabraRandom();
     console.log(this.azar.palabra);

  }
  jugar(){
    
      this.respuesta = this.respuesta.toUpperCase();
      this.listaPalabras.forEach(element =>{
        if(element.palabra == this.azar.palabra && this.respuesta == element.anagrama){
          console.log("Correcto!");
          this.mostrar = true;
          this.correcto = true;
          setTimeout(()=>{
            this.mostrar = false;
            this.correcto = false;
          },2000);
          this.respuesta = "";
          this.flag = 1;
          this.ganador = this.ganador +1;
        }
      })
      if(this.ganador == 5){
        setTimeout(() => {
          this.azar.palabra = "Ganaste!";
        },2000)
        this.miServicio.insertarCambio("anagramaG" , FirebaseService.nick);
        this.bloquear();
      }
      else if(this.flag == 0){
        this.mostrar = true;
        this.incorrecto = true;
        this.msj = this.obtenerPalabraCorrecta(this.azar.palabra);
        setTimeout(()=>{
            this.mostrar = false;
            this.incorrecto = false;
          },2000);
          this.respuesta = "";
      }
      this.flag = 0;
      this.perdedor = this.perdedor + 1;
      console.log(this.ganador);
      console.log(this.perdedor);
      if(this.perdedor == 7 && this.ganador <5){
        setTimeout(()=>{
          this.azar.palabra = "Perdiste!";
        },2000)
        console.log(FirebaseService.nick);
        this.miServicio.insertarCambio("anagramaP" , FirebaseService.nick);
        this.bloquear();
      }
      else if(this.ganador < 5){
        setTimeout(()=>{
          this.obtenerPalabraRandom();
        },2000);
      }
      this.contador = this.ganador + "/" + this.perdedor;
    
    
    
    
    
  }
  obtenerPalabraRandom(){
    let numeroRandom = Math.floor(Math.random() * (45 - 0)) + 0;
    console.log("numero random" + numeroRandom);
    this.azar = this.listaPalabras[numeroRandom];
  }
  obtenerPalabraCorrecta(palabra:string){
     let anagrama = "NONE"
     this.listaPalabras.forEach(data =>{
       if(data.palabra == palabra){
         anagrama = data.anagrama;
       }
     })
     return anagrama;
  }
  bloquear(){
    this.bloquearBoton = true;
    this.bloquearText = true;
  }
  reiniciar(){
    this.bloquearBoton = false;
    this.bloquearText = false;
    this.ganador = 0;
    this.perdedor = 0;
    this.contador = "";
    this.obtenerPalabraRandom();
  }



}
