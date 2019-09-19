import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
export interface Item { id: string; dni: string; apellido : string; nombre : string};


import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  items = Array();
  constructor(private bd : AngularFirestore) { 
    let clientesRef = bd.collection('clientes');
    clientesRef.get().subscribe(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
      this.items.push(doc.data());
    });
  })
 
  
  }
  getLista(){
    return this.items;
  }


}
