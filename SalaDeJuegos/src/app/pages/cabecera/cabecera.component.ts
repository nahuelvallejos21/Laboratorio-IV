import { Component, OnInit, Input } from '@angular/core';
import {FirebaseService} from '../../core/servicios/firebase.service'
import {Location} from '@angular/common'; 
@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {

  logueado : boolean = false;
  nick : string;
  @Input()mostrar : boolean = true;
  @Input()ruta : string = "";
  constructor(private miServicio : FirebaseService,private location : Location) {
    this.logueado = FirebaseService.logueado;
    this.nick = FirebaseService.nick;
   }

  ngOnInit() {
  }
  cerrarSesion(){
    this.logueado = false;
    FirebaseService.logueado = false;
  }
  

}
