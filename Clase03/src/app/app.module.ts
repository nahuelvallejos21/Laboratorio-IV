import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './Componentes/form/form.component';
import { DatosComponent } from './Componentes/datos/datos.component';
import { PadreComponent } from './Componentes/padre/padre.component';
import { FilaComponent } from './Componentes/fila/fila.component';
import { TestPipe } from './pipes/test.pipe';
import { SexoPipe } from './pipes/sexo.pipe';
import { EdadPipe } from './pipes/edad.pipe';

import { UserService } from './servicios/user.service';
import { SiNoPipe } from './pipes/si-no.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatosComponent,
    PadreComponent,
    FilaComponent,
    TestPipe,
    SexoPipe,
    EdadPipe,
    SiNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
