import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { NvD3Module } from 'ng2-nvd3';
import 'd3';
import 'nvd3';
import { ChartComponent } from './components/chart/chart.component';
import { SidenavTicketComponent } from './components/sidenav-ticket/sidenav-ticket.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PayTicketComponent } from './components/pay-ticket/pay-ticket.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { FakeDataService } from './services/fake-data.service.service';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    SidenavTicketComponent,
    PersonItemComponent,
    PersonListComponent,
    PayTicketComponent,
    ToolbarComponent,
    MainContentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    NvD3Module
  ],
  providers: [FakeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
