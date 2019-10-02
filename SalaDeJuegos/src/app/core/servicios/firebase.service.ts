import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { Usuario } from '../clases/usuario'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public static logueado : boolean = false;;
  public static nick : string;
  public static mostrar : boolean = true;

  lista = Array();
  jugadoresRef;
  constructor(private bd : AngularFirestore) { 

    this.jugadoresRef = bd.collection('jugadores');
    this.jugadoresRef.get().subscribe(snapshot => {
    snapshot.forEach(doc => {
      let obj = {
        id : doc.id,
        correo : doc.data().correo,
        clave : doc.data().clave,
        nick : doc.data().nick,
        anagramaG : doc.data().anagramaG,
        anagramaP : doc.data().anagramaP,
        tatetiG: doc.data().tatetiG,
        tatetiP : doc.data().tatetiP,
        miJuegoG : doc.data().miJuegoG,
        miJuegoP : doc.data().miJuegoP,

      }
      this.lista.push(obj);
    });
  })
  console.log(this.lista);
  }

  traerJugadores(){
    return this.lista;
  }
  registrarJugador(jugador : Usuario){
    try{
      this.jugadoresRef.add(jugador);
      return true;
    }
    catch(e){
       console.log("Error")
    }
    
  }
  verificarExistencia(jugador : Usuario){
    let flag : number = 0;
    this.lista.forEach(data =>{
      if(data.nick == jugador.nick){
        flag = 1;
      }
      else if(data.correo == jugador.correo){
        flag = -1;
      }
      if(data.correo == jugador.correo && data.nick == jugador.nick){
        flag = 2;
      }
    })
    return flag
  }
  verificarCorreoNick(correoNick : string , clave : string){
     let flag : boolean = false;
     this.lista.forEach(dato => {
        if(dato.correo == correoNick || dato.nick == correoNick){
           if(dato.clave == clave){
             flag = true;
           }
        }
      })
      return flag;
  }
  traerNick(info : string){
    let retorno : string = info;
    this.lista.forEach( dato =>{
      if(dato.correo == info){
          retorno = dato.nick;
      }
    })
    return retorno;
  }
  actualizar(id,jugador){
    this.bd.collection('jugadores').doc(id).set(jugador);
  }
  insertarCambio(tipo: string , nick : string){
    this.lista.forEach(data =>{
      if(data.nick == nick){
        switch(tipo){
          case "tatetiG":
               data.tatetiG = data.tatetiG + 1;
               this.actualizar(data.id,data);
               break;
          case "tatetiP":
              data.tatetiP = data.tatetiP + 1;
              this.actualizar(data.id,data);
              break;
          case "anagramaG":
              data.anagramaG = data.anagramaG + 1;
              this.actualizar(data.id,data);
              break;
          case "anagramaP":
                data.anagramaP = data.anagramaP + 1;
                this.actualizar(data.id,data);
                break;
          case "miJuegoG":
                data.miJuegoG = data.miJuegoG + 1;
                this.actualizar(data.id,data);
                break;
          case "miJuegoP":
                data.miJuegoP = data.miJuegoP + 1;
                this.actualizar(data.id,data);
                break;
          default :
              alert("Algo salio mal :(");
              break;
        }
      }
    })
  }
}






