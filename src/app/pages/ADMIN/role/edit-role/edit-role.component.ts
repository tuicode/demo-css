import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  frmRoleForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.frmRoleForm = this.fb.group({
      'roleID': new FormControl('', Validators.required),
      'Description': new FormControl('', Validators.required)
    })
  }

}
