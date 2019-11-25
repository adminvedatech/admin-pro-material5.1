import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';
import { BankGraphComponent } from './bank-graph/bank-graph.component';
import { ChartsModule } from 'ng2-charts';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    BankListComponent,
  //  AddBankComponent,
    AccountsComponent,
    BankAccountsComponent,
    BankAccountsComponent,
    BankGraphComponent
  ],
    imports: [
    CommonModule,
   // ReactiveFormsModule,
   // BrowserModule,
    BankRoutingModule,
    ChartsModule,

  ],
  exports: [
    BankListComponent,
    BankAccountsComponent,
    BankGraphComponent
  ]
})
export class BankModule { }
