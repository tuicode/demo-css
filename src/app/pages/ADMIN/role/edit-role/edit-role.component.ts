import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';



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


export class EditRoleComponent implements OnInit {

  selectPermission: string;
  permissionList: SelectItem[];
  companies: SelectItem[]
  roles: RoleDTO[];
  frmRoleForm: FormGroup;
  isShowAllFields: boolean = true;
  display: boolean = false;
  users: UserDTO[];
  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) { }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnInit() {

    this.frmRoleForm = this.fb.group({
      'roleID': new FormControl('', Validators.required),
      'Description': new FormControl('', Validators.required)
    })

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


  hideFields(): void {
    this.isShowAllFields = !this.isShowAllFields;
  }

  onSelectedPermission(event, role) {
    console.log('event ===========', event)
    console.log('role =============', role)
    this.showDialog();

  }

  onSelectedCompany(event, user) {
    console.log('event company ===========', event)
    console.log('user =============', user);

  }



  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }
}
