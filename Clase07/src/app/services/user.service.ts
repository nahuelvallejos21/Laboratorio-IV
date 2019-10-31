import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static user;
  constructor(private router : Router, private Http: HttpClient, private fireAuth : AngularFireAuth,private nube : AngularFireStorage)  {
  }
  setUser(user : any){
    localStorage.setItem("logueado",user);
  }
  estaAutenticado(){
    
    console.log(localStorage.getItem("logueado"));
    if(localStorage.getItem("logueado") != 'null' ){
      return true;
    } else{
      return false;
    }

  }
  login(user : any){
      try{
      let resultado = this.fireAuth.auth.signInWithEmailAndPassword(user.name,user.pass);
      console.log(resultado);
      if(resultado){
        this.fireAuth.idToken.subscribe(token =>{
          localStorage.setItem("token","ñkdsñkas");
        })
      }
      }
      catch(e){
        localStorage.setItem("token","no logueado");
      }
  }
  htttpAgregar(cliente : any){
     this.Http.post("http://127.0.0.1:3003/clientes",cliente).subscribe(data =>{
       console.log(data);
     });
  }
  httpAutenticar(cliente:any){
    this.Http.post("http://127.0.0.1:3003/login",cliente).subscribe(data =>{
      console.log(data);
      if(data["token"] != null){
        localStorage.setItem("token",data["token"]);
        this.router.navigate(["/algo"]);
      }
      else{
        console.log("Error!, no esta registrado");
      }
    })
  }
  httpAgregarAuto(auto:any){
     let token = localStorage.getItem("token");
     console.log(token);
     console.log(auto);
     const options = {
       headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
       })
     };
     return this.Http.post("http://127.0.0.1:3003/auto/",auto,options);
  }
  httpTraerAutos(){
    let token = localStorage.getItem("token");
     console.log(token);
     const options = {
       headers : new HttpHeaders({
        'Content-Type': 'application/json',
        'token': token
       })
     };
    return this.Http.get("http://127.0.0.1:3003/auto/",options);
  }
  subirArchivo(file : any,path : string){
    return this.nube.upload(path,file);
  }
  traerArchivo(path : string){
    return this.nube.ref(path).getDownloadURL()
  }
}
