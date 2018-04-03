import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './components/core/header/header.component';
import { LoginComponent } from './components/core/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './components/core/layouts/login-layout/login-layout.component';
import { ContentWrapperComponent } from './components/core/content-wrapper/content-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [ {
      path: '',
      component: ContentWrapperComponent
    }]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [{
      path: 'login',
      component: LoginComponent
    }]
  },
  { path: '**', redirectTo: '' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
