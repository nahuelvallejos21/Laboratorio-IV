import { AuthGuard } from './auth/auth.guard';
import { AlgoComponent } from './componentes/algo/algo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';


const routes: Routes = [
  {path : 'algo' , component : AlgoComponent , canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
