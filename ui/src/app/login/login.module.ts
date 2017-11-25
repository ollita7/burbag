import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogonRouting } from './login.routing';
import { MaterialModule } from '..//shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    LogonRouting,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]

})
export class LoginModule { }
