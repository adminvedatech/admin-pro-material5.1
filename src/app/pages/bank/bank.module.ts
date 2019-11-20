import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankRoutingModule } from './bank-routing.module';
import { BankComponent } from './bank.component';
import { BankListComponent } from './bank-list/bank-list.component';
import { AddBankComponent } from './add-bank/add-bank.component';
import { AccountsComponent } from './accounts/accounts.component';
import { BankAccountsComponent } from './bank-accounts/bank-accounts.component';

@NgModule({
  declarations: [BankListComponent, AddBankComponent, AccountsComponent, BankAccountsComponent, BankAccountsComponent],
  imports: [
    CommonModule,
    BankRoutingModule
  ],
  exports: [
    BankListComponent,
    BankAccountsComponent
  ]
})
export class BankModule { }
