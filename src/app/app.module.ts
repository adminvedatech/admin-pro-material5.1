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
import { Menu1Component } from './menu1/menu1.component';
import { NavModule } from './nav/nav.module';
import { NavComponent } from './nav/nav.component';
// import { PAGES_ROUTES } from './pages/principal-routing.module';
import { BankComponent } from './pages/bank/bank.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductionsComponent } from './pages/productions/productions.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ProductsComponent } from './pages/products/products.component';
import { BankAccountsComponent } from './pages/bank/bank-accounts/bank-accounts.component';
import { BankGraphComponent } from './pages/bank/bank-graph/bank-graph.component';
// import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { PAGES_ROUTES } from './pages/principal-routing.module';
import { AppRoutingModule } from './app-routing.module';
// import { APP_ROUTES, AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
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
    PrincipalModule,
   // APP_ROUTES,
    PAGES_ROUTES,
   
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
