import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  entidad = {nombre : "" , apellido : "" , correo : "" , dni : ""};
  disabled : boolean = true;
  mostrar : boolean = false;
  mostrar2 : boolean = false;
  data : string = "";
  constructor() { }

  ngOnInit() {
  }
  verificar(event){
    console.log(event);
    if(event !== null){
     this.disabled = false;
    }
    else{
      console.log("Ya no es valido");
      this.disabled = true;
    }
  }
  entrar(){
    console.log("Hola humano!");
    if(this.entidad.nombre == "" || this.entidad.apellido == "" || this.entidad.correo == "" || this.entidad.dni == ""){
      this.mostrar2 = true;
      setTimeout(()=>{
        this.mostrar2 = false
      },3000);
    }
    else{
      this.mostrar = true;
    }
    // this.data = JSON.stringify(this.entidad);
  }

}
