import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.scss']
})
export class TatetiComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    console.log(FirebaseService.logueado);
    if(FirebaseService.logueado == false){
      this.router.navigate(["/"]);
    }
  }

}
