import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavItem } from './../../models/NavItem';
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
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.displayLoader(true);
    this.getAllMenu();
  }

  getAllMenu(): void {

    this.navService.fetchedAllMenu()
      .subscribe(response => {
        if (response) {
          this.navItems = response;
          this.loaderService.displayLoader(false);
        }
      }, error => {

        console.log(error);
        throw error;
      });
  }

  ngOnDestroy() {

  }
}
