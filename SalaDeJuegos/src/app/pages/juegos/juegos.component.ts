import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.scss']
})
export class JuegosComponent implements OnInit {
  mostrar : boolean = true;
  constructor(private miServicio : FirebaseService,private router : Router) { }

  ngOnInit() {
    console.log(FirebaseService.logueado);
    if(FirebaseService.logueado == false){
      this.router.navigate(["/"]);
    }
  }

}
