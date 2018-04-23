import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from './services/role.service';
import { Role } from './models/role';
import { LoaderService } from './../../../shared/services/loader.service';
import { SelectItem } from 'primeng/api';
import { DropDownOption } from './../../../shared/models/dropdown-option';
import { AppSetting } from './../../../core/configs/appSetting';
import { AppService } from './../../../app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent implements OnInit {

  public roles: Role[] = [];
  public rowPerPage;
  public pageTitle: string = 'Roles';
  cols: any[];

  constructor(
    private loaderService: LoaderService,
    private roleService: RoleService,
    private appService: AppService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {


    this.appService.childSayPageTitle(this.pageTitle);
    this.rowPerPage = AppSetting.DEDAULT_ROW_NUMBER;
    this.appService.childSaidPaging$.subscribe(pageNumber => {
      this.getAllRole(pageNumber);
    })
  }

  ngOnInit() {

    this.getAllRole();
  }

  getAllRole(rowNumber?: string): void {
    this.loaderService.displayLoader(true);
    this.roleService.fetchedAllRole().subscribe(response => {
      if (response) {
        this.roles = rowNumber === 'All' ? response : this.paging(response, rowNumber);
        this.loaderService.displayLoader(false);
      }
    }, error => {
      throw error
    })
  }

  onRowSelect(event) {
    //console.log('event data =======>', event.data)
  }

  edit(row) {
    console.log('row ========>', row);

    this.router.navigate['roles' + '/' + row.id]
  }

  onShowRowPerPageChange(event) {
    // this.getAllRole(event);
  }

  paging(datas, rowNumber) {
    let num = AppSetting.DEFAULT_ROW_PERPAGE;;
    if (rowNumber) {
      num = parseInt(rowNumber);
    }
    const totalRow = datas.length;
    // console.log('totalRow ', totalRow);
    // console.log('num ', num);
    // console.log('data', datas);
    return datas.splice(0, totalRow <= num ? totalRow : num)
  }

}
