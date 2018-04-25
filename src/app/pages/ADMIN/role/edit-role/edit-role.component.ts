/* tslint:disable */

import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, OnChanges, AfterViewInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ValidationHelper } from './../../../../shared/validation/validation-helper';
import { RoleService } from './../services/role.service';

interface RoleDTO {
  MenuID: string;
  Description: string;
  ModuleID: string;
  PermissionMode: number;
}

interface UserDTO {
  UserID: string;
  UserName: string;
  CompanyName: string;
}

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})


export class EditRoleComponent implements AfterViewInit {
  //formgroup: FormGroup;
  roleForm: any
  selectPermission: string;
  resultValidator: any;
  permissionList: SelectItem[];
  companies: SelectItem[]
  roles: RoleDTO[];
  frmRoleForm: FormGroup;
  isShowAllFields: boolean = true;
  display: boolean = false;
  users: UserDTO[];
  isFormRender: boolean = false;
  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef,
    private validationHelper: ValidationHelper,
    private roleService: RoleService,
  ) {
  }

  ngOnInit() {
    var resp = {
      "$schema": "http://json-schema.org/draft-04/schema#",
      "title": "Role",
      "type": "object",
      "additionalProperties": false,
      "required": [
        "RoleId",
        "CreatedAt",
        "Description",
        "LastModifiedBy"
      ],
      "properties": {
        "RoleId": {
          "type": "string",
          "maxLength": 7,
          "minLength": 3
        },
        "CreatedAt": {
          "type": "string",
          "format": "date-time",
        },
        "Description": {
          "type": "string",
          "maxLength": 7,
        },
        "LastModifiedBy": {
          "type": "string",
          "format": "date-time"
        },
      }
    };


    // this.frmRoleForm = this.validationHelper.addRequiredValidation(resp)
    // this.loadSchema();
    this.roleForm = resp;

    this.roles = [
      { MenuID: 'WM-01', Description: 'Inbound', ModuleID: 'WM', PermissionMode: 0 },
      { MenuID: 'WM-01-01', Description: 'ASN', ModuleID: 'WM', PermissionMode: 1 },
      { MenuID: 'WM-01-02', Description: 'Reciepts', ModuleID: 'WM', PermissionMode: 1 },
      { MenuID: 'WM-01-03', Description: 'Blind', ModuleID: 'WM', PermissionMode: 1 },
      { MenuID: 'WM-02', Description: 'Outbound', ModuleID: 'WM', PermissionMode: 0 },
      { MenuID: 'WM-02-01', Description: 'Shipments', ModuleID: 'WM', PermissionMode: 2 }
    ]

    this.permissionList = [
      { value: '1', label: 'Full Access' },
      { value: '2', label: 'Custom' },
    ];

    this.users = [
      { UserID: 'budi', UserName: 'Budiyanto Tanjung', CompanyName: 'AllCompany' },
      { UserID: 'hatta', UserName: 'Moh.Hatta', CompanyName: 'AllCompany' },
      { UserID: 'willie', UserName: 'Willie  Lim', CompanyName: 'MLL' },
      { UserID: 'shufeng', UserName: 'Yan Shufeng', CompanyName: 'LHN' },
    ]

    this.companies = [
      { value: '1', label: 'AllCompany' },
      { value: '2', label: 'MLL' },
      { value: '3', label: 'LHN' },
    ]

  }


  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  hideFields(): void {
    this.isShowAllFields = !this.isShowAllFields;
  }

  onSelectedPermission(event, role) {
    this.showDialog();

  }

  onSelectedCompany(event, user) {
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  // loadSchema(): void {
  //   this.roleService.getJsonSchema('http://localhost:1486/api/Roles/GetSchema').subscribe(
  //     data => { this.roleForm = data });
  // }
}
