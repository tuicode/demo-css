import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginLayoutComponent } from './login-layout.component';
import { LoginComponent } from './../../login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './../../../auth/auth.service';

describe('LoginLayoutComponent', () => {
  let component: LoginLayoutComponent;
  let fixture: ComponentFixture<LoginLayoutComponent>;
  let authService: AuthService
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginLayoutComponent, LoginComponent],
      imports: [FormsModule,RouterTestingModule],
      providers: [AuthService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginLayoutComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    authService = TestBed.get(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
