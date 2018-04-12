import { Component, OnInit } from '@angular/core';
import { Menu } from './models/menu.class';
import { MenuService } from './services/menu.service';
import { LoaderService } from './../../shared/services/loader.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menus: Menu[] = [];
  constructor(
    private menuService: MenuService,
    private loaderService: LoaderService
  ) { }

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
