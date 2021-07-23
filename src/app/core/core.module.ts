import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { throwIfAlreadyLoaded } from './guard/module-import.guard';

@NgModule({
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyBSOtE-FfPBhCEnhNkpNUyrWHtOkx-xeCE",
        authDomain: "angular-playground-23023.firebaseapp.com",
        databaseURL: "https://angular-playground-23023-default-rtdb.firebaseio.com",
        projectId: "angular-playground-23023",
        storageBucket: "angular-playground-23023.appspot.com",
        messagingSenderId: "320456136830",
        appId: "1:320456136830:web:d3941b965aa601fd19a02f",
        measurementId: "G-VFS6DVJBLT"
      }
    )
  ],
  providers: [
    HttpClient
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
