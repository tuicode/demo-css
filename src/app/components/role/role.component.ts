import { Component, OnInit } from '@angular/core';
import { RoleService } from './services/role.service';
import { Role } from './models/role';
import { LoaderService } from './../../shared/services/loader.service';
import { SelectItem } from 'primeng/api';
import { DropDownOption } from './../../shared/models/dropdown-option';
import { AppSetting } from './../../configs/appSetting';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})


export class RoleComponent implements OnInit {

  public roles: Role[] = [];
  public rowPerPage;



  constructor(
    private loaderService: LoaderService,
    private roleService: RoleService
  ) {

    this.rowPerPage = AppSetting.DEDAULT_ROW_NUMBER;
  }

  ngOnInit() {
    this.getAllRole(AppSetting.DEFAULT_ROW_PERPAGE.toString());
  }

  getAllRole(row?: string): void {
    this.loaderService.displayLoader(true);
    this.roleService.fetchedAllRole().subscribe(response => {
      if (response) {
        this.roles = row === 'All' ? response : this.paging(response, row);
        this.loaderService.displayLoader(false);
      }
    }, error => {
      throw error
    })
  }

  onRowSelect(event) {
    console.log('event data =======>', event.data)
  }

  edit(row) {
    console.log('row ========>', row);
  }

  onShowRowPerPageChange(event) {
    this.getAllRole(event);
  }

  paging(datas, rowNumber) {
    let num = AppSetting.DEFAULT_ROW_PERPAGE;;
    if (rowNumber) {
      num = parseInt(rowNumber);
    }
    const totalRow = datas.length;
    console.log('totalRow ', totalRow);
    console.log('num ', num);
    console.log('data', datas);
    return datas.splice(0, totalRow <= num ? totalRow : num)
  }

}
