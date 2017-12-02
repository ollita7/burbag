import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/login.service';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  constructor(private auth: AuthService) {
  }
  public loginPerformed(sm: string): void {
    switch (sm) {
      case 'facebook': this.loginWithFacebook(); break;
      case 'google': this.loginWithGoogle(); break;
    }
  }

  public loginWithGoogle(): void {
    this.auth.loginWithGoogle().then(response => {
      console.log(response);
    });
  }

  public loginWithFacebook(): void {
    this.auth.loginFacebook();
  }

  public loginWithTwitter(): void {
    this.auth.loginWithTwitter();
  }

}
