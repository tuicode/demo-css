import { Component, OnInit ,Input} from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { User } from '../../../models/user';
import {AuthService} from './../../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentUser : User = new User();

  constructor(
    private authService : AuthService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  onLogout()
  {
    this.authService.logout();
  }
}
