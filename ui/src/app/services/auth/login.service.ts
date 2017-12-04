import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private authState = new Subject<firebase.User>();
  public currentUser: firebase.User = null;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.authState.next(user);
      } else {
        this.currentUser = null;
      }
    });
  }

  public get getAuthState(): Observable<firebase.User> {
    return this.authState.asObservable();
  }

  public isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  public loginWithGoogle(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider());
  }

  public loginFacebook(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }

  public loginWithTwitter(): Promise<any> {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    );
  }

}
