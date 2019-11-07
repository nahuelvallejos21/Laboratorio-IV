import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss']
})
export class ColoresComponent implements OnInit {

  color : string;
  colores : string[] = ["azul","amarillo","rojo","verde"]
  mostrarA: boolean = false;
  mostrarAm: boolean = false;
  mostrarV: boolean = false;
  mostrarR: boolean = false;
  mostrarB:boolean = true;
  mostrarB2:boolean = false;
  contador:number = 0;
  movimientos = [];
  correcto = 0;
  ganar = 0;
  mostrarM : boolean = false;
  mostrarB3: boolean = false;
  msj = "";
  constructor(private miServicio : FirebaseService) { }

  ngOnInit() {
    
  }
  iniciar(){
    this.iniciarMovimiento(1000);
  }
  activarColor(color : string){
     switch(color){
       case "azul" :
             this.mostrarA = true;
             this.mostrarR = false;
             this.mostrarV = false;
             this.mostrarAm = false;
             break;
       case "amarillo" :
             this.mostrarA = false;
             this.mostrarR = false;
             this.mostrarV = false;
             this.mostrarAm = true;
             break;
       case "rojo" :
             this.mostrarA = false;
             this.mostrarR = true;
             this.mostrarV = false;
             this.mostrarAm = false;
             break;
       case "verde" :
             this.mostrarA = false;
             this.mostrarR = false;
             this.mostrarV = true;
             this.mostrarAm = false;
             break;
       default :
           this.mostrarA = false;
           this.mostrarR = false;
           this.mostrarV = false;
           this.mostrarAm = false;
           break;
        
     }
  }
  iniciarMovimiento(velocidad : number){
    this.mostrarB = false;
    this.mostrarM = false;
    this.mostrarB2 = false;
    setTimeout(()=>{
      let numeroRandom = Math.floor(Math.random() * (4 - 0)) + 0;
      this.color = this.colores[numeroRandom];
      this.activarColor(this.color);
      this.movimientos.push(this.color);
      console.log(numeroRandom);
    },velocidad);
    setTimeout(()=>{
      this.color = "";
      this.activarColor("no");
    },velocidad * 2)
    setTimeout(()=>{
      let numeroRandom = Math.floor(Math.random() * (4 - 0)) + 0;
      this.color = this.colores[numeroRandom];
      this.activarColor(this.color);
      this.movimientos.push(this.color);
      console.log(numeroRandom);
    },velocidad * 3);
    setTimeout(()=>{
      this.color = "";
      this.activarColor("no");
    },velocidad * 4)
    setTimeout(()=>{
      let numeroRandom = Math.floor(Math.random() * (4 - 0)) + 0;
      this.color = this.colores[numeroRandom];
      this.activarColor(this.color);
      this.movimientos.push(this.color);
      console.log(numeroRandom);
    },velocidad * 5);
    setTimeout(()=>{
      this.color = "";
      this.activarColor("no");
    },velocidad*6)
    setTimeout(()=>{
      let numeroRandom = Math.floor(Math.random() * (4 - 0)) + 0;
      this.color = this.colores[numeroRandom];
      this.activarColor(this.color);
      this.movimientos.push(this.color);
      console.log(numeroRandom);
    },velocidad*7);
    setTimeout(()=>{
      this.color = "";
      this.activarColor("no");
      this.mostrarB2 = true;
    },velocidad*8)
  }
  jugar(color : string){
    this.mostrarB2 = false;
    if(color == this.movimientos[this.contador]){
       this.correcto++;
       this.activarColor(color);
       setTimeout(()=>{
         this.activarColor("no");
         this.mostrarB2 = true;
       },1000);
     }
     else{
       this.miServicio.insertarCambio("miJuegoP",FirebaseService.nick);
       this.activarColor("no");
       this.color = "Perdiste!!!";
       this.mostrarM = true;
       this.mostrarB3 = true;
       
     }
     this.contador++;
    
     if(this.movimientos.length == this.correcto){
      this.ganar ++;
       if(this.ganar == 3){
         console.log("ganaste");
         this.miServicio.insertarCambio("miJuegoG",FirebaseService.nick);
         this.color = "Ganaste!";
         this.activarColor("no");
         this.mostrarM = true;
         this.mostrarB = true;
         setTimeout(()=>{
          this.mostrarB2 = false;
         },1000);
       }
       else if(this.ganar == 1){
        this.activarColor("no");
        this.color = "Nivel 2";
        this.mostrarM = true;
        setTimeout(()=>{
          this.iniciarMovimiento(500);
         },2000)
       }
       else if(this.ganar == 2){
        this.activarColor("no");
        this.color = "Nivel 3";
        this.mostrarM = true;

        setTimeout(()=>{
          this.iniciarMovimiento(400);
         },2000);
        
       }
       
     }
  }
  reiniciar(){
    this.mostrarM = false;
    this.mostrarB2 = false;
    this.mostrarB3 = false;
    this.movimientos = [];
    this.contador = 0;
    this.correcto = 0;
    this.ganar = 0;
    this.iniciarMovimiento(1000);

  } 
  

}
