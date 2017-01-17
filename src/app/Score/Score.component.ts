import { Component, OnInit,OnDestroy } from "@angular/core";
import { ActivatedRoute} from '@angular/router' ;
import 'rxjs/add/operator/map' ;
import { Subscription } from 'rxjs/Subscription';




import { Observable } from 'rxjs/Observable';
 import { Problem } from '../models/Problem.model';
 import { Team } from '../models/Team.model';
//import { ProblemService} from '../Services/ProblemService'
 



@Component({
  selector: "score",
  templateUrl : "../Score/Score.component.html"
  
})
export class ScoreComponent implements OnInit, OnDestroy {

  

constructor( )
{
  //ici récupere la liste des équipes participants

}






 
 


ngOnInit(){
 //this.parties = Parties.find({}).zone();
 //this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
}


ngOnDestroy(){


}


 
}
