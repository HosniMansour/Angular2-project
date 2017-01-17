import { Component, OnInit,OnDestroy } from "@angular/core";
import { FormGroup, FormBuilder,Validators} from '@angular/forms' ;
;
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Subscription } from 'rxjs/Subscription'; 
import 'rxjs/add/operator/map';






import { CanActivate } from '@angular/router';



import { Observable } from 'rxjs/Observable';
 import { Problem } from '../models/Problem.model';

import { ProblemService} from '../Services/ProblemService'


@Component({
  selector: "problem-details",
  templateUrl :"../Problem_Details/Problem-details.component.html"
  //styles: [ style ]
})
export class ProblemDetailsComponent implements OnInit  {

  //party : Party ;
    partyId : string ;
     paramsSub: Subscription;
     partySub : Subscription ;
     problem : Problem ;

//constructor(private route : ActivatedRoute, private problemService : ProblemService){}




ngOnInit(){
  /*this.route.params
    .switchMap((params: Params) => this.problemService.getProblem(+params['id']))
    .subscribe(problem => this.problem = hero);*/
}



 


ValidateProblem() : void{
  
  //on vérife sir la réponse entré est valide ou non 

}


}

