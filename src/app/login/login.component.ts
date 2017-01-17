import { Component, OnInit } from '@angular/core';
import { AuthService} from "../auth.service";
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public errorMsg = '';
   loginForm : FormGroup;
submitted : boolean;

  constructor(
    private _service:AuthService, fb : FormBuilder
  ) {
 this.loginForm = fb.group({
            'TeamName':[null,Validators.required],
            'password':[null,Validators.required]
         
})
    
  }

  login(value : any):void {
    console.log('reactive form data');
        this.submitted=true;
console.log('value', value);
  }

 
ngOnInit(){
 //this.parties = Parties.find({}).zone();
 //this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
}


ngOnDestroy(){


}

}
