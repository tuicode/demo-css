import { NgModule, EventEmitter, Directive, ViewContainerRef, Input, Output, ContentChildren, ContentChild, TemplateRef, OnInit, OnChanges, OnDestroy, AfterContentInit, QueryList, SimpleChanges, EmbeddedViewRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class PrimeTemplate {

    @Input() type: string;

    @Input('pTemplate') name: string = 'body';

    constructor(public template: TemplateRef<any>) { }

    getType(): string {
        return this.name;
    }
}

/* Deprecated */
@Component({
    selector: 'ifl-column',
    template: ''
})
export class IFLColumn implements AfterContentInit {
    @Input() field: string;
    @Input() colId: string;
    @Input() sortField: string;
    @Input() filterField: string;
    @Input() header: string;
    @Input() footer: string;
    @Input() sortable: any;
    @Input() editable: boolean;
    @Input() filter: boolean = true;
    @Input() filterMatchMode: string;
    @Input() filterType: string = 'text';
    @Input() excludeGlobalFilter: boolean;
    @Input() rowspan: number;
    @Input() colspan: number;
    @Input() scope: string;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() exportable: boolean = true;
    @Input() headerStyle: any;
    @Input() headerStyleClass: string;
    @Input() bodyStyle: any;
    @Input() bodyStyleClass: string;
    @Input() footerStyle: any;
    @Input() footerStyleClass: string;
    @Input() hidden: boolean;
    @Input() expander: boolean;
    @Input() selectionMode: string;
    @Input() filterPlaceholder: string;
    @Input() filterMaxlength: number;
    @Input() frozen: boolean;
    @Input() resizable: boolean = true;
    @Output() sortFunction: EventEmitter<any> = new EventEmitter();
    @ContentChildren(PrimeTemplate) templates: QueryList<any>;
    @ContentChild(TemplateRef) template: TemplateRef<any>;

    public headerTemplate: TemplateRef<any>;
    public bodyTemplate: TemplateRef<any>;
    public footerTemplate: TemplateRef<any>;
    public filterTemplate: TemplateRef<any>;
    public editorTemplate: TemplateRef<any>;

    ngAfterContentInit(): void {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case 'header':
                    this.headerTemplate = item.template;
                    break;

                case 'body':
                    this.bodyTemplate = item.template;
                    break;

                case 'footer':
                    this.footerTemplate = item.template;
                    break;

                case 'filter':
                    this.filterTemplate = item.template;
                    break;

                case 'editor':
                    this.editorTemplate = item.template;
                    break;

                default:
                    this.bodyTemplate = item.template;
                    break;
            }
        });
    }
}



/* Deprecated */
@Component({
    selector: 'p-row',
    template: ``
})
export class Row {

    @ContentChildren(IFLColumn) columns: QueryList<IFLColumn>;

}

@NgModule({
    imports: [CommonModule],
    exports: [IFLColumn, Row],
    declarations: [IFLColumn, Row]
})
export class IFLSharedModule { }
