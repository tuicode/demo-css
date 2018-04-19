import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IFLDataTableModule } from './../shared/ui/customizedComponents/ifl-datatable.module';
import { IFLSharedModule } from './../shared/ui/customizedComponents/ifl-shared.module';
import { CheckboxModule } from 'primeng/primeng';

@NgModule({
  imports: [
    IFLDataTableModule,
    IFLSharedModule,
    CheckboxModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IFLSharedModule,
    IFLDataTableModule,
    CheckboxModule
  ],
  declarations: []
})
export class SharedModule { }
