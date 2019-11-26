import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PAGES_ROUTES } from './pages-routing.module';
import { BankComponent } from './bank/bank.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PagesComponent } from './pages.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BankModule } from './bank/bank.module';
import { AddBankTransactionComponent } from './bank/add-bank-transaction/add-bank-transaction.component';
import { BankTransactionComponent } from './bank/bank-transaction/bank-transaction.component';

@NgModule({
    declarations: [
      BankComponent,
      CustomersComponent,
      SuppliersComponent,
      AddBankComponent,
      AddBankTransactionComponent,
      BankTransactionComponent,
      PagesComponent
    ],
    imports: [
      CommonModule,
      AngularMaterialModule,
      BankModule,
       ReactiveFormsModule,
       FormsModule,
      // BrowserModule,
      PAGES_ROUTES
    ],
    exports: [
      // ReactiveFormsModule,
      // FormsModule,
      // BrowserModule
    ]
  })
  export class PagesModule { }
  