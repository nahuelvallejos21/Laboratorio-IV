import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @Input()listado;
  @Input()mostrar;
  lista;
  constructor(private user: UserService) { }

  ngOnInit() {
    this.lista = this.user.getLista();
    console.log(this.user)
  }

}
