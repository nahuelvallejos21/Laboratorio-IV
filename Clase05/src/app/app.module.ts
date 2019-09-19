import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PagesModule} from './pages/pages.module';

import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FirebaseService} from './Servicios/firebase.service';

let config  = {
  apiKey: "AIzaSyDtUKTHJOnQtKq06_YDPTFdc9DN8v-Yc2Y",
  authDomain: "usuarios-1af2b.firebaseapp.com",
  databaseURL: "https://usuarios-1af2b.firebaseio.com",
  projectId: "usuarios-1af2b",
  storageBucket: "usuarios-1af2b.appspot.com",
  messagingSenderId: "602301943034",
  appId: "1:602301943034:web:2422a95e286f0dcb"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(config),
    //AngularFirestoreModule
  ],
  providers: [
    //FirebaseService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
