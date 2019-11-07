import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.scss']
})
export class AnagramaComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    console.log(FirebaseService.logueado);
    if(FirebaseService.logueado == false){
      this.router.navigate(["/"]);
    }
  }

}
