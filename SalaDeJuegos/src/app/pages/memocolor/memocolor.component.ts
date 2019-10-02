import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/servicios/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memocolor',
  templateUrl: './memocolor.component.html',
  styleUrls: ['./memocolor.component.scss']
})
export class MemocolorComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    if(FirebaseService.logueado == false){
      this.router.navigate(["/"]);
    }
  }

}
