import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {

  constructor() { }
  enviado = true;
  mas = false;
  nombre = '';
  apellido = '';
  dni = 'NO';
  email = 'NO';
  src = 'http://www.ismedioambiente.com/wp-content/uploads/2011/06/Convenio-Europeo-del-Paisaje.jpg';
  width = '300';
  height = '300';
  ngOnInit() {
  }
  Manejadora(){
    this.enviado = !this.enviado;
  }
  Manejadora2(){
    this.mas = true;
  }

}
