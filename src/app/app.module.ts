import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import { PrincipalModule } from './pages/principal.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { PrincipalComponent } from './pages/principal.component';
import { AuthRequestOptions } from './auth/auth.request';
import { ErrorService } from './services/error.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NofoundComponent } from './nofound/nofound.component';
import { APP_ROUTES } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NofoundComponent,
    // PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    LoginModule,
   APP_ROUTES,
    HttpClientModule,
    BrowserAnimationsModule,
    PrincipalModule,
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
