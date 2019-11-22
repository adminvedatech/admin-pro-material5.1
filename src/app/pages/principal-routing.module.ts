import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { BankComponent } from './bank/bank.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AccountingBooksComponent } from './accounting-books/accounting-books.component';
import { ProductionsComponent } from './productions/productions.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { ReportsComponent } from './reports/reports.component';
import { BankListComponent } from './bank/bank-list/bank-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { ProductsComponent } from './products/products.component';

const principalRoutes: Routes = [
    
      {
        path: 'customers',
        component: CustomersComponent
      },
      {
          path: 'suppliers',
          component: SuppliersComponent
      },
      {
          path: '', redirectTo: '/customers', pathMatch: 'full'
      }

];
/* @NgModule({
    imports: [RouterModule.forChild(principalRoutes)],
    exports: [RouterModule]
  })
  export class PrincipalRoutingModule { }
   */
 export const PAGES_ROUTES = RouterModule.forChild( principalRoutes );
