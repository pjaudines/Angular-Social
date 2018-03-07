import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///// Start FireStarter

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module';

// Feature Modules
import { ItemModule } from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule } from './ui/shared/ui.module';
import { NotesModule } from './notes/notes.module';
///// End FireStarter

import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyDcYPsrybZBuLd6CsSvg7w3qq5rO3AkHrc",
  authDomain: "angular-s-c4903.firebaseapp.com",
  databaseURL: "https://angular-s-c4903.firebaseio.com",
  projectId: "angular-s-c4903",
  storageBucket: "",
  messagingSenderId: "637052749758"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ItemModule,
    UiModule,
    NotesModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule { }
