import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FakeDataService } from './services/fake-data.service.service';
import { AuthService } from './services/auth/login.service';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { isNil } from 'lodash';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {
    console.log(auth);
  }

  ngOnInit() {
    this.auth.getAuthState.subscribe((user: firebase.User) => {
      if (!isNil(user)) {
        this.auth.currentUser = user;
        this.router.navigateByUrl('/home');
      }
    });
  }

}

