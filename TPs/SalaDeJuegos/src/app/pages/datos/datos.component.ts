import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.scss']
})
export class DatosComponent implements OnInit {

  lista = []
  constructor(private miServicio : FirebaseService) { 
    this.lista = miServicio.traerJugadores();
  }

  ngOnInit() {
    console.log(this.lista);
  }

}
