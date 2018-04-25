import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationHelper } from './../../validation/validation-helper';
import { String, StringBuilder } from 'typescript-string-operations';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ifl-dynamic-form',
  template: `
  <form novalidate  [formGroup]="form">
    <div class="box-body">
      <div *ngFor="let prop of objectProps">
          <div class="form-group">
            <label [attr.for]="prop[0].key">{{prop[0].key}}</label>
            <input [id]="prop[0].key" [type]="prop[0].validation.type" class="form-control"
            [formControlName]="prop[0].key">
            <div class="ui-message ui-messages-error ui-corner-all"
                *ngIf="!form.controls[prop[0].key].valid&&form.controls[prop[0].key].dirty">
                <i class="fa fa-close"></i>
                <span *ngIf="form.controls[prop[0].key].errors['required']">
                {{'Infolog.Common.Message.Required' | translate}}
                </span>
                <span *ngIf="form.controls[prop[0].key].errors['maxlength']">
                {{'Infolog.Common.Message.MaxLength' | translate}} {{prop[0].validation.maxLength}}
                {{'Infolog.Common.Message.Character' | translate}}
                </span>
                <span *ngIf="form.controls[prop[0].key].errors['minlength']">
                {{'Infolog.Common.Message.MinLength' | translate}} {{prop[0].validation.minLength}}
                {{'Infolog.Common.Message.Character' | translate}}
                </span>
            </div>
          </div>
      </div>
    </div>
    <div class="box-footer">
      <button type="submit" class="btn btn-success" [disabled]="!form.valid">Submit</button>
      <button type="reset" class="btn btn-default fl-right">Cancel</button>
    </div>
</form>
<hr />
  `,
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() dataObject;
  form: FormGroup;
  objectProps;
  constructor(private validationHelper: ValidationHelper) { }

  ngOnInit() {
    this.objectProps = this.validationHelper.getSchema(this.dataObject);
    let group: any = {};
    for (let gr of this.objectProps) {
      group[gr[0].key] = new FormControl('', this.validationHelper.mapValidators(gr));
    }
    this.form = new FormGroup(group);
  }
}

