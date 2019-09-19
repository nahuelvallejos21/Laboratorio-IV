import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  id ;
  constructor(private route : ActivatedRoute) {
   this.id =  this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
