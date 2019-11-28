import { Injectable } from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage'
import { Entidad } from '../modals/entidad';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SonrisaService {

  entidadRef : AngularFirestoreCollection<Entidad>
  constructor(private nube : AngularFireStorage , private bd : AngularFirestore , private fireAuth : AngularFireAuth,private router : Router) { 
    this.entidadRef = this.bd.collection("entidades");
  }

  subirArchivo(file:any , path : string){
    return this.nube.upload(path,file);
  }
  traerArchivo(path : string){
    return this.nube.ref(path).getDownloadURL();
  }
  async agregarEntidad(obj : Entidad){
    try{
      const result =  await this.fireAuth.auth.createUserWithEmailAndPassword(obj.correo,obj.clave);
      if(result != null){
        this.entidadRef.add(obj);
      }
    }
    catch(e){
      throw e;
    }
    
  }
  async iniciarSesion(obj : Entidad){
     try{
        const result = await this.fireAuth.auth.signInWithEmailAndPassword(obj.correo,obj.clave);
        result.user.getIdToken().then(token =>{
          localStorage.setItem("token" , token);
          localStorage.setItem("entidad_logueada" ,JSON.stringify(obj));
          this.router.navigate(["/home"]);

        })
     }
     catch(e){
       throw e;
     }
  }
}
