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

@NgModule({
  declarations: [
    BankListComponent,
    AddBankComponent,
    AccountsComponent,
    BankAccountsComponent,
    BankAccountsComponent,
    BankGraphComponent],
  imports: [
    CommonModule,
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
