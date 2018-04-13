import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from "./shared/shared.module";
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { AccordionModule } from 'primeng/primeng';

// handle global log

import { ErrorsHandle } from './errors-handler';
import { GrowlModule } from 'primeng/growl';
// templete module
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { CheckboxModule } from 'primeng/primeng';
import { PaginatorModule, DataTableModule } from 'primeng/primeng';
import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderService } from './shared/services/loader.service';
import { LoggerService } from './shared/services/logger.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavService } from './core/nav/nav.service';
import { MenuService } from './components/menu/services/menu.service';
import { ErrorsService } from './errors.service';
import { RoleService } from './components/role/services/role.service';
// import { HeaderComponent } from './core/header/header.component';

import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContentWrapperComponent } from './core/content-wrapper/content-wrapper.component';
import { LoginComponent } from './core/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { HeaderComponent } from './core/header/header.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MenuItemComponent } from './core/nav/menu-item/menu-item.component';
import { LoaderComponent } from './core/loader/loader.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadCrumbComponent } from './core/bread-crumb/bread-crumb.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { ErrorsComponent } from './core/errors/errors.component';
import { RoleComponent } from './components/role/role.component';




@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    NavComponent,
    FooterComponent,
    ContentWrapperComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    HeaderComponent,
    OrderComponent,
    CustomerComponent,
    MenuItemComponent,
    LoaderComponent,
    MenuComponent,
    BreadCrumbComponent,
    NotfoundComponent,
    ErrorsComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AccordionModule,
    PanelModule,
    ButtonModule,
    GrowlModule,
    DropdownModule,
    RadioButtonModule,
    CheckboxModule,
    PaginatorModule,
    DataTableModule,
    BreadcrumbModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard, AuthService, LoaderService, LoggerService, NavService, MenuService, ErrorsService,
    RoleService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ErrorHandler, useClass: ErrorsHandle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
