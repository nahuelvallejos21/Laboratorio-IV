import { Component, OnInit, Input } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: '[app-fila]',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
