import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {initializeApp,database} from 'firebase';
import {AngularFire, FirebaseListObservable} from "angularfire2";

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

let users = [
  new User('test','test'),
  new User('admin','admin')
];

@Injectable()
export class AuthService {

  constructor(
    private _router: Router,
    private af : AngularFire
  ){
  }

  login(user){
   let authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.toString());
      this._router.navigate(['home']);
      return true;
    }
    return false;

  }
}
