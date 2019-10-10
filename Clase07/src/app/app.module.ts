import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgoComponent } from './componentes/algo/algo.component';
import { HomeComponent } from './componentes/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { config } from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
// import { JwtModule } from "@auth0/angular-jwt";
// export function tokenGetter() {
//   return localStorage.getItem("token");
// }

@NgModule({
  declarations: [
    AppComponent,
    AlgoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
