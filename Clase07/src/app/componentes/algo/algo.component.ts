import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  auto = {auto : {}};
  autos: Array<T>;
  constructor(private router : Router,private miServicio : UserService) { }

  ngOnInit() {
    this.miServicio.httpTraerAutos().subscribe(data =>{
      console.log(data);
      this.autos = data["rta"];
      console.log(this.autos);
    })
  }
  ngOnChanges(){
    console.log("Estoy en el ONchanges");
    this.miServicio.httpTraerAutos().subscribe(data =>{
      console.log(data);
      this.autos = data["rta"];
      console.log(this.autos);
    })
  }
  desloguearse(){
     
     localStorage.removeItem("token");
     this.router.navigate(["/home"]);
  }
  agregarAuto(){
    console.log(this.auto);
    this.miServicio.httpAgregarAuto(this.auto);
    this.miServicio.httpTraerAutos().subscribe(data =>{
      console.log(data);
      this.autos = data["rta"];
      console.log(this.autos);
    })
  }

}
