import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { JuegosComponent } from './juegos/juegos.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuJuegoComponent } from './menu-juego/menu-juego.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { TatetiComponent } from './tateti/tateti.component';
import { TablaComponent } from './tabla/tabla.component';
import { ListaComponent } from './lista/lista.component';
import { DatosComponent } from './datos/datos.component';
import { ErrorComponent } from './error/error.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { PalabraComponent } from './palabra/palabra.component';
import { ReglasAnComponent } from './reglas-an/reglas-an.component';
import { InfoComponent } from './info/info.component';
import { MemocolorComponent } from './memocolor/memocolor.component';
import { ColoresComponent } from './colores/colores.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [JuegosComponent,CabeceraComponent,InicioComponent,MenuComponent, MenuJuegoComponent, RegistroComponent, LoginComponent, TatetiComponent, TablaComponent, ListaComponent, DatosComponent, ErrorComponent, AnagramaComponent, PalabraComponent, ReglasAnComponent, InfoComponent, MemocolorComponent, ColoresComponent, DetallesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PagesModule { }
