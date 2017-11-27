import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { FakeDataService } from './services/fake-data.service.service';
import { AuthService } from './services/login.service';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private currentUser: firebase.User = null;
  constructor(private auth: AuthService) {
    console.log(auth);
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe((user: firebase.User) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
  }

}

