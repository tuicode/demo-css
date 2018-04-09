import { async, ComponentFixture, TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NavService } from './nav.service';
import { LoggerService } from './../../shared/services/logger.service';
import { LoaderService } from './../../shared/services/loader.service';
import { NavComponent } from './nav.component';
import { NavItem } from './../../models/NavItem';
import { DebugElement, Component } from '@angular/core';
import { By } from "@angular/platform-browser";

class MockNavService extends NavService {
  fetchedAllMenu() {
    return null;
  }
}

describe('NavComponent', () => {
  let injector: TestBed;
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let navService: NavService;
  let testBedService: NavService;
  let componentService: NavService;
  let menuElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      imports: [HttpClientTestingModule],
      providers: [NavService, LoggerService, LoaderService]
    });

    // Configure the component with another set of Providers
    TestBed.overrideComponent(
      NavComponent,
      { set: { providers: [{ provide: NavService, useClass: MockNavService }] } }
    );

    // create component and test fixture
    fixture = TestBed.createComponent(NavComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    // AuthService provided to the TestBed
    testBedService = TestBed.get(NavService);

    // AuthService provided by Component, (should return MockAuthService)
    componentService = fixture.debugElement.injector.get(NavService);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([NavService], (injectService: NavService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('should create class treeview', () => {
    menuElement = fixture.debugElement.query(By.css('treeview'));
    fixture.detectChanges();
    expect(menuElement.nativeElement).toBeFalsy();
  });

});
