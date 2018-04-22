import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { AdminUser } from './../../models/adminuser';
import { AuthService } from './../../guard/auth.service';
import { NgForm } from '@angular/forms';
import { LoaderService } from './../../../shared/services/loader.service';
import * as _ from 'lodash';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  public user: User = new User();
  public isCustomerLogo = false;
  public isError = false;
  errors: string;
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(
    private authService: AuthService,
    private loaderService: LoaderService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  login(username, password) {
    this.submitted = true;
    this.isRequesting = true;
    this.errors = '';
    if (username && username) {
      this.authService.login(username, password)
        .finally(() => this.isRequesting = false)
        .subscribe(
          result => {
            if (result) {
              this.router.navigateByUrl(this.returnUrl);
            }
          },
          error => this.errors = error);
    }
  }
}
