import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {path: "" , redirectTo : "login" , pathMatch:"full"},
  {path :"registro" , component: RegistroComponent },
  {path: "home" , component : HomeComponent , canActivate : [AuthGuard]},
  {path: "login" , component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
