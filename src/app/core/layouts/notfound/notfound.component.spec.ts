import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotfoundComponent } from './notfound.component';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should content text ', () => {
    htmlElement = fixture.nativeElement;
    const h1 = htmlElement.querySelector("h1");
    expect(h1.textContent).toEqual('test notfound component')
   
  });


});
