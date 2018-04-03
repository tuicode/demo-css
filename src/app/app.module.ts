import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FormsModule } from '@angular/forms'

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/core/header/header.component';
import { NavComponent } from './components/core/nav/nav.component';
import { FooterComponent } from './components/core/footer/footer.component';
import { ContentWrapperComponent } from './components/core/content-wrapper/content-wrapper.component';
import { LoginComponent } from './components/core/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/core/layouts/home-layout/home-layout.component';
import { LoginLayoutComponent } from './components/core/layouts/login-layout/login-layout.component';

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
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AuthGuard, AuthService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
