import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BankModule } from './bank/bank.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BankComponent } from './bank/bank.component';
import { ProductionsComponent } from './productions/productions.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    BankComponent,
    ProductionsComponent,
    CustomersComponent,
    ProductsComponent
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    BankModule,
    PAGES_ROUTES,
    MatToolbarModule
  ],
  exports: [
     MatToolbarModule,
     AngularMaterialModule,
     BrowserModule,
     BrowserAnimationsModule,
     
  ]
})
export class PrincipalModule { }