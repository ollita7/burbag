import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { TableModule } from './table/table.module';

import { FakeDataService } from './services/fake-data.service.service';
import { AnalyticsModule } from './analytics/analytics.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableModule,
    LoginModule,
    AnalyticsModule,
    RouterModule
  ],
  providers: [FakeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
