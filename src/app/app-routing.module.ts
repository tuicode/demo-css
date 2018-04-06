import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './core/header/header.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { ContentWrapperComponent } from './core/content-wrapper/content-wrapper.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
    children: [{
      path: '',
      component: ContentWrapperComponent
    }, {
      path: 'order',
      component: OrderComponent
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
