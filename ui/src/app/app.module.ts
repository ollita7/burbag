import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TableModule } from './table/table.module';

import { FakeDataService } from './services/fake-data.service.service';
import { AuthService } from './services/auth/login.service';
import { AuthGuardService } from './services/auth/auth-guard.service';

import { AnalyticsModule } from './analytics/analytics.module';
import { LoginModule } from './login/login.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HttpClientModule} from '@angular/common/http';

export const firebaseConfig = {
  apiKey: 'AIzaSyAH1Vr8LEX5T2m_i2yrzjSosJyoBrCKbU4',
  authDomain: 'beerbug-92bc5.firebaseapp.com',
  databaseURL: 'https://beerbug-92bc5.firebaseio.com',
  projectId: 'beerbug-92bc5',
  storageBucket: 'beerbug-92bc5.appspot.com',
  messagingSenderId: '916427182233'
};




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    LoginModule,
    AnalyticsModule,
    RouterModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [FakeDataService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
