import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.scss']
})
export class AlgoComponent implements OnInit {

  auto = {auto : {modelo : "" , marca : "" , color : "" , hp : "" , foto : ""}};
  autos = [];
  mostrar: boolean = false;
  exito : boolean = false;
  bloquear : boolean = true;
  constructor(private router : Router,private miServicio : UserService) { }

  ngOnInit() {
    this.miServicio.httpTraerAutos().subscribe(data =>{
      console.log(data);
      this.autos = data["rta"];
      console.log(this.autos);
    })
  }
  agregarAuto(){
    console.log(this.auto);
    let path = "autos/" + this.auto.auto["modelo"] + "_" + this.auto.auto["color"]; 
    this.miServicio.traerArchivo(path).subscribe(data =>{
      this.auto.auto.foto = data;
      console.log(this.auto);
      this.miServicio.httpAgregarAuto(this.auto).subscribe(data =>{
        console.log(data);
        if(data["rta"]["ok"] == 1){
          console.log("Entro");
          this.miServicio.httpTraerAutos().subscribe(data =>{
            console.log(data);
            this.autos = data["rta"];
            console.log(this.autos);
            this.auto = {auto : {modelo : "" , marca : "" , color : "" , hp : "" , foto : ""}};
            this.bloquear = true;
          })
        }
      });
    })
  }
  subirArchivo(event){
    
    this.mostrar = true;
    this.exito = false;
    let path = "autos/" + this.auto.auto["modelo"] + "_" + this.auto.auto["color"];
    this.miServicio.subirArchivo(event.target.files[0],path).then(data =>{
      if(data.state == "success"){
          this.mostrar = false;
          this.exito = true;
          this.bloquear = false;
      }
      
    });
  }
  descargarPDF(){
    const doc = new jsPDF();
    doc.fromHTML(document.getElementById("miTabla"),15,15);
    doc.save("grilla_autos.pdf");
  }

}
