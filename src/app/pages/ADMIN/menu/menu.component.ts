import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu.class';
import { MenuService } from './services/menu.service';
import { LoaderService } from './../../../shared/services/loader.service';
import { AppService } from './../../../app.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus: Menu[] = [];
  public pageTitle = 'Menus'
  constructor(
    private menuService: MenuService,
    private loaderService: LoaderService,
    private appService: AppService
  ) {
    this.appService.childSayPageTitle(this.pageTitle);
  }

  ngOnInit() {
    this.loaderService.displayLoader(true);
    this.getMenuList();
  }

  getMenuList(): void {
    this.menuService.getMenuList().subscribe(response => {
      if (response) {
        this.menus = response;
        this.loaderService.displayLoader(false);
      }
    }, error => {
      throw error;
    })
  }
}
