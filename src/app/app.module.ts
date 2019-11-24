import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { AuthRequestOptions } from './auth/auth.request';
import { ErrorService } from './services/error.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NofoundComponent } from './nofound/nofound.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { PAGES_ROUTES } from './pages/pages-routing.module';
import { PagesComponent } from './pages/pages.component';
// import { APP_ROUTES, AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  //  PagesComponent,
    NofoundComponent,
   
    // PrincipalComponent
  ],
 
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    LoginModule,
    AppRoutingModule,
    PagesModule,
   // APP_ROUTES,
    PAGES_ROUTES,
   
    HttpClientModule,
    BrowserAnimationsModule,
    PagesModule,
    MatToolbarModule
  ],
  entryComponents: [LoginComponent],
  providers: [
    ErrorService,
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestOptions,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
