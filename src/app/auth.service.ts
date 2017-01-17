import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {initializeApp,database} from 'firebase';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import { Observable} from 'rxjs/Observable' ;
import {Http, Response ,Headers,RequestOptions} from '@angular/http' ;
 import { Problem } from './models/Problem.model';
import { Team} from './models/Team.model' ; 


import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch';



@Injectable()
export class AuthService {

  constructor(
    private _router: Router,
    private af : AngularFire
  ){
  }














//*************************SIGN IN********************//

logIn(Teamname : string, password: string){

}



//*****************LOG OUT**********************************//


logout(){
    //only remove user from localStorage
    localStorage.removeItem('currentTeam');
}





//***************** LOGGED IN ***********//

isloggedIn()
{
     if (localStorage.getItem('currentTeam')) {
            // logged in so return true
            return true;
}else{
    return false ;
}
}












}
