import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { LogonRouting } from './login.routing';
import { MaterialModule } from '..//shared/material/material.module';

import { LoginService } from './services/login.service';

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
  ],
  providers: [LoginService]

})
export class LoginModule { }
