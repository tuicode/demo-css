import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from './../../models/user';
import { DebugElement, Component } from '@angular/core';
import { By } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { LoggerService } from './../../shared/services/logger.service';
import { LoaderService } from './../../shared/services/loader.service';

// class RouterStub {
//   navigateByUrl(url: string) { return url; }
// }

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitElement: DebugElement;
  let usernameElement: DebugElement;
  let passwordElement: DebugElement;
  let errorMessageElement: DebugElement;
  let authService: AuthService;
  let componentService: AuthService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule],
      providers: [AuthService, LoggerService, LoaderService,
        { provide: Router }]
    });

    // create component and text fixture
    fixture = TestBed.createComponent(LoginComponent);
    // get test component form fixture
    component = fixture.componentInstance;
    // user service provided to the TestBed
    authService = TestBed.get(AuthService);
    submitElement = fixture.debugElement.query(By.css('button'));
    usernameElement = fixture.debugElement.query(By.css('input[type=text]'));
    passwordElement = fixture.debugElement.query(By.css('input[type=password]'));
    componentService = fixture.debugElement.injector.get(AuthService);

  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should render button login', () => {
    fixture.detectChanges();
    let element = submitElement.nativeElement;
    expect(element.textContent).toBe('Login');
  })

  it('enter username and password  trigger event click ', () => {
    usernameElement.nativeElement.value = "admin";
    passwordElement.nativeElement.value = "admin";
    submitElement.triggerEventHandler('click', null);
    console.log('submitElement click');
    componentService.fetchedUser().subscribe(reponse => {
      expect(reponse.length > 0);
    })
  })

  it('should show error message ', () => {
    fixture.detectChanges();
    // click button login 
    submitElement.triggerEventHandler('click', null);
    // mock value
    component.isError = true;
    errorMessageElement = fixture.debugElement.query(By.css('.validation-msg'));
    let errorEle = errorMessageElement.nativeElement;
    console.log('errorEle ==========>', errorEle);
    expect(errorEle.textContent).toContain('Sorry, you have entered an invalid User ID.');
  })

});
