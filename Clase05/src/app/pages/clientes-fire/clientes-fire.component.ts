import { Component, OnInit } from '@angular/core';
import {FirebaseService, Item} from '../../core/servicios/firebase.service';
@Component({
  selector: 'app-clientes-fire',
  templateUrl: './clientes-fire.component.html',
  styleUrls: ['./clientes-fire.component.scss']
})
export class ClientesFireComponent implements OnInit {

  lista = []
  constructor(private fireService : FirebaseService) { 
    this.lista = this.fireService.getLista();
  }

  ngOnInit() {
    console.log(this.lista);
  }

}
