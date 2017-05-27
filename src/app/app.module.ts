import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { appRoutes,routComponents } from './app.routing';
import { AppserviceService } from './appservice.service';
import { AuthGuard } from './login/auth.service';
import { MdButtonModule,MdInputModule, MdCardModule,MdToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KnustComponent } from './knust/knust.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCFX-X-qPEyYBDfge7b4Ed_tN0bvijLwCA",
  authDomain: "angualrgmaillogin.firebaseapp.com",
  databaseURL: "https://angualrgmaillogin.firebaseio.com",
  projectId: "angualrgmaillogin",
  storageBucket: "angualrgmaillogin.appspot.com",
  messagingSenderId: "732721872746"
}

@NgModule({
  declarations: [
    AppComponent,
    routComponents,
    KnustComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MdButtonModule,MdInputModule, MdCardModule,MdToolbarModule
  ],
  providers: [AppserviceService,AuthGuard,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
