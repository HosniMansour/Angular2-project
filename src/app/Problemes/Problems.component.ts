import { Component, OnInit,OnDestroy } from "@angular/core";
import { ActivatedRoute} from '@angular/router' ;
import 'rxjs/add/operator/map' ;
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

 
 import { Problem } from '../models/Problem.model';
 import { Team } from '../models/Team.model';

//import { ProblemService} from '../Services/ProblemService'


@Component({
  selector: "problems-list",
  templateUrl :"./Problems.component.html"

})
export class ProblemsListComponent implements OnInit, OnDestroy {


       problems: FirebaseListObservable<Problem[]>;

constructor( af: AngularFire)
{
//get list of problems
this.problems = af.database.list('/Problem');
console.log('la liste des problems', this.problems);
}






 
 


ngOnInit(){
console.log('hello');
//this.problems.push({"id":2,"Titre:":"problem2","Description":"nothing","nombre_points:":10,"solution":"12345679"})
}


ngOnDestroy(){


}


 
}
