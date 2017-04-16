import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, } from '@angular/router';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

// Firebase Config
// Initialize Firebase
  let firebaseConfig = {
    apiKey: 'AIzaSyD-JEdSLTZebqAo3Zt1jMnA0hXlRA83BVk',
    authDomain: 'chaosmessenger-b953a.firebaseapp.com',
    databaseURL: 'https://chaosmessenger-b953a.firebaseio.com',
    projectId: 'chaosmessenger-b953a',
    storageBucket: 'chaosmessenger-b953a.appspot.com',
    messagingSenderId: '486670196021'
  };


// App Modules
import { LoginModule } from './+login/login.module';
import { SharedModule } from './+shared/shared.module';
import { HeaderModule } from './+header/header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    LoginModule,
    SharedModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
