import { Component, OnInit } from '@angular/core';
import {User} from './../../../models/user';
import {AuthService} from './../../../auth/auth.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : User = new User() ;

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
  }

  onSubmit(frmuser: NgForm)
  {
    if(frmuser.valid)
    {
      this.authService.login(this.user)
    }
   
  }
}
