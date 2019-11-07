import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';
import { TatetiComponent } from './pages/tateti/tateti.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ErrorComponent } from './pages/error/error.component';
import { AnagramaComponent } from './pages/anagrama/anagrama.component';
import { InfoComponent } from './pages/info/info.component';
import { MemocolorComponent } from './pages/memocolor/memocolor.component';
import { DetallesComponent } from './pages/detalles/detalles.component';


const routes: Routes = [
  {path : "" , component : InicioComponent ,children : [
    {path : "info" , component : InfoComponent,children:[
      {path: "detalles",component:DetallesComponent}
    ]}
  ]},
  {path : "inicio" , component : InicioComponent},
  {path : "juegos" , component : JuegosComponent},
  {path : "juegos/tateti" ,component : TatetiComponent},
  {path : "juegos/anagrama", component : AnagramaComponent},
  {path : "juegos/memocolor" , component : MemocolorComponent},
  {path : "registro" , component : RegistroComponent},
  {path : "login" , component : LoginComponent},
  {path : "lista" , component : ListaComponent},
  {path : "**" , component : ErrorComponent},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
