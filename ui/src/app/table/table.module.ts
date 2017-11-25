import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '..//shared/material/material.module';

import { SidenavTicketComponent } from './components/sidenav-ticket/sidenav-ticket.component';
import { PersonItemComponent } from './components/person-item/person-item.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PayTicketComponent } from './components/pay-ticket/pay-ticket.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';

import { TableRouting } from './table.routing';


@NgModule({
  imports: [
    CommonModule,
    TableRouting,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    SidenavTicketComponent,
    PersonItemComponent,
    PersonListComponent,
    PayTicketComponent,
    ToolbarComponent,
    MainContentComponent
  ],
  exports: [
    SidenavTicketComponent,
    PersonItemComponent,
    PersonListComponent,
    PayTicketComponent,
    ToolbarComponent,
    MainContentComponent,

  ],
})
export class TableModule { }
