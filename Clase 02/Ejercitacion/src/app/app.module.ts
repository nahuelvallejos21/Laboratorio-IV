import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Componentes/form/form.component';
import { DatosComponent } from './Componentes/datos/datos.component';
import { PadreComponent } from './Componentes/padre/padre.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatosComponent,
    PadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
