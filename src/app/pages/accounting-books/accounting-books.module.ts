import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingBooksRoutingModule } from './accounting-books-routing.module';
import { AccountingBooksComponent } from './accounting-books.component';

@NgModule({
  declarations: [AccountingBooksComponent],
  imports: [
    CommonModule,
    AccountingBooksRoutingModule
  ]
})
export class AccountingBooksModule { }
