// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { HomeComponent } from './home.component';

// describe('HomeComponent', () => {
//   let component: HomeComponent;
//   let fixture: ComponentFixture<HomeComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ HomeComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(HomeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './../../../core/layouts/header/header.component';
import { NavComponent } from './../../../core/layouts/nav/nav.component';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, HeaderComponent, NavComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    // create component and test fixture
    fixture = TestBed.createComponent(HomeComponent);
    // get component from test fixture
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    console.log('component ', component);
    expect(component).toBeDefined();
    // htmlElement = fixture.nativeElement;
    // const div = htmlElement.querySelector("div");
    // expect(div).toBeTruthy();
  })

})

