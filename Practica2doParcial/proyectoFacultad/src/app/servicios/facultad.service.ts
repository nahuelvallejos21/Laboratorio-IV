import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Entidad } from '../modals/entidad';
import { Materia } from '../modals/materia';
@Injectable({
  providedIn: 'root'
})
export class FacultadService {

  
  entidadref : AngularFirestoreCollection<Entidad>;
  materiaRef : AngularFirestoreCollection<Materia>;
  constructor(private bd : AngularFirestore, private auth : AngularFireAuth) { 
     this.entidadref = this.bd.collection("entidades");
     this.materiaRef = this.bd.collection("materias");
  }
  async agregarEntidad(obj : Entidad){
      try{
         let resultado = await this.auth.auth.createUserWithEmailAndPassword(obj.correo,obj.clave);
         console.log(resultado);
         this.entidadref.add(obj);
      }
      catch(e){
         throw e;
      }
  }
  async iniciarSesion(obj:Entidad){
     try{
        let result = await this.auth.auth.signInWithEmailAndPassword(obj.correo,obj.clave);
        result.user.getIdToken().then(data =>{
           localStorage.setItem("token" , data);
           localStorage.setItem("usuario_logueado", obj.correo);
        })
     }
     catch(e){
        throw e;
     }
  }
  usuarios(){
    return this.entidadref.valueChanges();
  }
  agregarMateria(obj:Materia){
    this.materiaRef.add(obj);
  }
  materias(){
   return this.materiaRef.valueChanges();
  }
}
