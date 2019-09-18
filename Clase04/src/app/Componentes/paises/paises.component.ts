import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../Servicios/paises.service';
@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss']
})
export class PaisesComponent implements OnInit {

  lista :any;
  constructor(private servicioPais :  PaisesService) { }

  ngOnInit() {
    this.servicioPais.getPaises().subscribe(data =>{
       this.lista = data;
       console.log(this.lista);
    })
  }


}
