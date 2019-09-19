import { ClientesComponent } from './pages/clientes/clientes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path : 'home' , component : HomeComponent},
  {path : 'clientes' , component : ClientesComponent , children : [
    {path : 'detalles/:id' , component : DetallesComponent}
  ]},
   {path : '**' , redirectTo : 'home' , pathMatch : 'full'},
    {path : ' ' , redirectTo : 'home' , pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
