import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../app/core/guard/auth.guard';
import { HeaderComponent } from './core/layouts/header/header.component';
import { LoginComponent } from './core/layouts/login/login.component';
import { HomeComponent } from './core/layouts/home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { ContentWrapperComponent } from './core/layouts/content-wrapper/content-wrapper.component';
// import { MenuComponent } from './pages/ADMIN/menu/menu.component';
import { ErrorsComponent } from './core/layouts/errors/errors.component';
import { RoleComponent } from './pages/ADMIN/role/role.component';

const routes: Routes = [

  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [{
      path: '',
      component: ContentWrapperComponent,
    },
    {
      path: 'roles',
      data: {
        breadcrumb: 'System admistration > roles'
      },
      component: RoleComponent
    },
    {
      path: 'error',
      component: ErrorsComponent
    },
    ]
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

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [AppRoutingModule]
// })
export class AppRoutingModule { }
