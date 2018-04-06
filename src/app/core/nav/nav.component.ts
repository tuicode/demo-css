import { Component, OnInit } from '@angular/core';
import { NavItem } from './../../models/NavItem';
import { RouterLinkActive } from '@angular/router';
import { NavService } from './nav.service';
import { LoaderService } from './../../shared/services/loader.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public navItems: NavItem[];

  constructor(
    private navService: NavService,
    private loaderServie: LoaderService
  ) { }

  ngOnInit() {
    this.loaderServie.displayLoader(true);
    this.navItems = this.getAllMenu();
    // this.loaderServie.displayLoader(false);
  }

  // ngAfterViewInit() {
  //   this.cd.detectChanges();
  // }

  getAllMenu() {

    return this.navService.getAllMenu();
  }
}
