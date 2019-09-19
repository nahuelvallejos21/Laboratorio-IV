import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ErrorComponent } from './error/error.component';
import { ClientesFireComponent } from './clientes-fire/clientes-fire.component';



@NgModule({
  declarations: [HomeComponent, ClientesComponent, DetallesComponent, ErrorComponent, ClientesFireComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
