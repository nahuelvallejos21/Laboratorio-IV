import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private lista;

  constructor() { }

  getLista() {
    return this.lista;
  }

  setLista(lista) {
    this.lista = lista;
  }
}
