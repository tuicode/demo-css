import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { AdminUser } from './../../core/login/models/adminuser';
import { AuthService } from './../../auth/auth.service';
import { NgForm } from '@angular/forms';
import { LoaderService } from './../../shared/services/loader.service';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public isCustomerLogo = false;
  public isError = false;
  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(frmuser: NgForm) {
    if (frmuser.valid) {
      this.loaderService.displayLoader(true);
      this.authService.fetchedUser().subscribe(
        response => {
          if (response) {
            var users = response;
            console.log('user :', users);
            var result = this.findUser(users, this.user);

            if (result) {
              localStorage.setItem('currentUser', JSON.stringify(result));
              this.router.navigate(['/']);
            }
            else{
              this.isError = true;
            }
            this.loaderService.displayLoader(false);
          }

        }, error => {
          console.log('err ', error);
        }
      )
    }

  }


  findUser(adminUsers: AdminUser[], term: User): AdminUser {
    var result = _.find(adminUsers, function (item) {
      if (item.name === term.username && item.password === term.password) {
        return item;
      }
    })
    return result;
  }
}
