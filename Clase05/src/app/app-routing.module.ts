import { ClientesComponent } from './pages/clientes/clientes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ClientesFireComponent } from './pages/clientes-fire/clientes-fire.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path: 'error' , component : ErrorComponent},
  {path : 'clientes' , component : ClientesComponent , children : [
    //{path : 'detalles/:id' , component : DetallesComponent}
  ]},
   {path : 'clientes/detalles/:id' , component : DetallesComponent},
   {path : 'hola' , component : ClientesFireComponent},
   {path : '**' , redirectTo : 'error' , pathMatch : 'full'},
   {path : ' ' , redirectTo : 'home' , pathMatch : 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
