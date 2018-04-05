import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './../../auth/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { User } from './../../models/user';
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  let authService: AuthService;
  let spy: any;
  let user: User;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    // user service provided to the TestBed
    authService = TestBed.get(AuthService);
    debugElement  = fixture.debugElement;
    htmlElement = debugElement.nativeElement;
    user = new User();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
});
