import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {PagesModule} from './pages/pages.module';

import {AngularFireModule} from '@angular/fire';
import {config} from './core/config_firebase'
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FirebaseService} from './core/servicios/firebase.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [
    FirebaseService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
