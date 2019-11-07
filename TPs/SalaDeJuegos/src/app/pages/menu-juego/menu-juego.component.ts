import { Component, OnInit, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';

@Component({
  selector: 'app-menu-juego',
  templateUrl: './menu-juego.component.html',
  styleUrls: ['./menu-juego.component.scss']
})
export class MenuJuegoComponent implements OnInit {
  @Input() mostrar : boolean = true;
  constructor(private router : Router,private miServicio : FirebaseService) { 
  
  }

  ngOnInit() {
  }
  ngOnChanges(){
    console.log("Cambio");
  }
  irJugar(){
    this.mostrar = false;
  }
}
