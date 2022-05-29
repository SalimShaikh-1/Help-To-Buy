import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDMjiS-UKj6Dwp0IqqkpO8UrS3EIXpuljM",
    authDomain: "no-broker-f8922.firebaseapp.com",
    databaseURL: "https://no-broker-f8922-default-rtdb.firebaseio.com",
    projectId: "no-broker-f8922",
    storageBucket: "no-broker-f8922.appspot.com",
    messagingSenderId: "1027629239527",
    appId: "1:1027629239527:web:b2338013fe6915522aa642",
    measurementId: "G-9W6JB23GKY"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    FormsModule      
  ],
  providers: [AngularFireStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
