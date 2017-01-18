import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { User } from '../models/user.model' ;
import { FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user = new User('','');
  public errorMsg = '';
   loginForm : FormGroup;
    submitted : boolean;

  constructor(
    private _service:AuthService, fb : FormBuilder
  ) {
 this.loginForm = fb.group({
            'email':[null,Validators.required],
            'password':[null,Validators.required]
})

  }

  login(value : any):void {
    console.log('reactive form data');
    this.submitted=true;
    console.log('value', value);

    if(!this._service.logIn(value)){
      this.errorMsg = 'Failed to login';
    }
  }


ngOnInit(){
 //this.parties = Parties.find({}).zone();
 //this.partiesSub = MeteorObservable.subscribe('parties').subscribe();
}


ngOnDestroy(){


}

}
