import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Http, Response, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { IAuthenticationService } from './IAuthenticationService'
import * as firebase from 'firebase';

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  Username: String;

  private isAuthenticated: BehaviorSubject<boolean>;

  constructor(private auth: AngularFire) {
    this.isAuthenticated = new BehaviorSubject<boolean>(false);
    this.auth.auth.subscribe(x => {
      if (x) {
        if (x.auth) {
          this.storeAuthenticationInformation(x.auth);
          this.isAuthenticated.next(true);
        }
      }else{
        this.isAuthenticated.next(false);
      }
    });
  }

  private storeAuthenticationInformation(authInfo: firebase.User) {
    let user = new UserData();
    user.avatar = authInfo.photoURL;
    user.email = authInfo.email;
    user.name = authInfo.displayName;
    user.uid = authInfo.uid;
    let userInfo = JSON.stringify(user);
    localStorage.setItem('currentUser', userInfo);
  }

  public authGoogle() {
    this.auth.auth.login({ provider: AuthProviders.Google, method: AuthMethods.Redirect });
  }

  public authFacebook() {
    this.auth.auth.login({ provider: AuthProviders.Facebook, method: AuthMethods.Redirect });
  }

  public get IsAuthenticated(): Observable<boolean> {
    return this.isAuthenticated;
  }

  public get UserName(): string {
    let userObject = localStorage.getItem('currentUser');
    let user = JSON.parse(userObject) as UserData;
    return user.name;
  }

  public get ID(): string {
    let userObject = localStorage.getItem('currentUser');
    let user = JSON.parse(userObject) as UserData;
    return user.uid;
  }

  public get Mail(): string {
    let userObject = localStorage.getItem('currentUser');
    let user = JSON.parse(userObject) as UserData;
    return user.email;
  }

  public get Avatar(): string {
    let userObject = localStorage.getItem('currentUser');
    let user = JSON.parse(userObject) as UserData;
    return user.avatar;
  }

  public signOut() {
    localStorage.removeItem('currentUser');
    this.auth.auth.logout();
  }
}

class UserData {
  public uid: string;
  public name: string;
  public avatar: string;
  public email: string;
}

