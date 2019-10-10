import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  desloguearse(){
     
     localStorage.setItem("logueado",null);
     this.router.navigate(["/home"]);
  }

}
