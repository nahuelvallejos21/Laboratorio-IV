import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
import undefined = require('firebase/empty-import');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static user;
  constructor(private router : Router, private Http: HttpClient, private fireAuth : AngularFireAuth)  {
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
}
