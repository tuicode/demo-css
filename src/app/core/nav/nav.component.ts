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
          this.navItems = this.list_to_tree(response);
          console.log('this.navItems ', this.navItems);
          this.loaderService.displayLoader(false);
        }
      }, error => {
        console.log(error);
      });
  }

  list_to_tree(list) {

    var map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i].id] = i; // initialize the map
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (node.parentId !== "0") {

        node.isChild = true;
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node.parentId]].children.push(node);
      } else {

        if (!node.isChild)
          roots.push(node);
      }
    }
    return roots;
  }


  ngOnDestroy() {

  }
}
