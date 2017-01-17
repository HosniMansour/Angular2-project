import { Component, OnInit } from '@angular/core';
import {User, AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public user = new User('','');
  public errorMsg = '';

  constructor(
    private _service:AuthService
  ) {}

  login() {
    if(!this._service.login(this.user)){
      this.errorMsg = 'Failed to login';
    }
  }

  ngOnInit() {
  }

}
