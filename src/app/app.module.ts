import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { MyApp } from './app.component';
import { CarroProvider } from '../providers/carros.provider';

export const firebase = {
  apiKey: 'AIzaSyBbwcKnBntg486EAjQgBkeiLgRisTq2PE8',
  authDomain: 'rra2-ce011.firebaseapp.com',
  databaseURL: 'https://rra2-ce011.firebaseio.com',
  storageBucket: 'rra2-ce011.appspot.com',
  messagingSenderId: '624648151812',
  projectId: 'rra2-ce011',
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule ,
    IonicModule.forRoot(MyApp) ,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule ,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    CarroProvider,
  ]
})
export class AppModule {}
