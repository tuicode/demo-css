import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpLoaderFactory } from './app.translate.factory';
import { SharedModule } from "./shared/shared.module";
import { NgModule, ErrorHandler } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/guard/auth.guard';
import { AuthService } from './core/guard/auth.service';
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
import { IFLDataTableModule } from './../../src/app/shared/ui/customizedComponents/ifl-datatable.module';
import { IFLSharedModule } from './../../src/app/shared/ui/customizedComponents/ifl-shared.module';

import { MessageModule } from 'primeng/message';
import { DropdownModule } from 'primeng/dropdown';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoaderService } from './shared/services/loader.service';
import { LoggerService } from './shared/services/logger.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NavService } from './core/layouts/nav/nav.service';
// import { MenuService } from './pages/ADMIN/menu/services/menu.service';
import { ErrorsService } from './errors.service';
import { RoleService } from './pages/ADMIN/role/services/role.service';
import { AppService } from './app.service';
import { HeaderComponent } from './core/layouts/header/header.component';

import { NavComponent } from './core/layouts/nav/nav.component';
import { FooterComponent } from './core/layouts/footer/footer.component';
import { ContentWrapperComponent } from './core/layouts/content-wrapper/content-wrapper.component';
import { LoginComponent } from './core/layouts/login/login.component';
import { HomeComponent } from './core/layouts/home/home.component';
import { HomeLayoutComponent } from './core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './core/layouts/login-layout/login-layout.component';
import { LoaderComponent } from './core/layouts/loader/loader.component';
import { MenuComponent } from './pages/ADMIN/menu/menu.component';
import { BreadCrumbComponent } from './core/layouts/bread-crumb/bread-crumb.component';
import { NotfoundComponent } from './core/layouts/notfound/notfound.component';
import { ErrorsComponent } from './core/layouts/errors/errors.component';
import { RoleComponent } from './pages/ADMIN/role/role.component';
import { AsnComponent } from './../app/pages/WMS/asn/asn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ContentWrapperComponent,
    LoginComponent,
    HomeComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    LoaderComponent,
    BreadCrumbComponent,
    NotfoundComponent,
    ErrorsComponent,
    HomeComponent,
    RoleComponent,
    AsnComponent,
    MenuComponent,
  ],
  exports: [

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
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
    IFLSharedModule,
    IFLDataTableModule,
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard, AuthService, LoaderService,
    LoggerService, NavService, RoleService,
    ErrorsService,
    AppService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: ErrorHandler, useClass: ErrorsHandle }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
