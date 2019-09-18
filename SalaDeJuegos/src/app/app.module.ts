import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { CabeceraComponent } from './Componentes/cabecera/cabecera.component';
import { MenuComponent } from './Componentes/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CabeceraComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
