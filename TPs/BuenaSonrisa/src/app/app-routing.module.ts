import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { AuthGuard } from './guards/auth/auth.guard';


const routes: Routes = [
  {path : "registro" , component : RegistroComponent},
  {path : "" , redirectTo : "registro" , pathMatch : "full"},
  {path: "login" , component : LoginComponent},
  {path : "home" , component : HomeComponent , canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
