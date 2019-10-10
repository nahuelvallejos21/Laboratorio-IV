import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static user;
  constructor(private router : Router, private Http: HttpClient) {
  }
  setUser(user : any){
     UserService.user = user;
     console.log(UserService.user);
     this.Http.get("http://192.160.2.85:3003/clientes",user).subscribe(element=>{
       console.log(element);
     })
  }
  estaAutenticado(){
    // tslint:disable-next-line: triple-equals
    if(JSON.stringify(UserService.user) != '{}'){
      return true;
    } else{
      console.log('No entro ');
      return false;
    }

  }
}
