import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [HomeComponent, ClientesComponent, DetallesComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
