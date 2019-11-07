import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(FirebaseService.logueado == false){
      this.router.navigate(["/"]);
    }
  }

}
