import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../core/servicios/firebase.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  
  constructor(private servicio : FirebaseService) { }

  ngOnInit() {
    
  }


}
