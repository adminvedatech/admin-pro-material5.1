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

const principalRoutes: Routes = [

//   { path:'bank', component: BankComponent, data: { titulo: 'ProgressBars' } },
//   { path:'customer', component: CustomersComponent, data: { titulo: 'ProgressBars' } },
 
  // { path: 'customer', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},

     //    { path: 'bank-list', component: BankListComponent, data: { titulo: 'Banks List' } },
        // { path: 'customers', component: CustomersComponent, data: { titulo: 'Customers' } },
        // { path: 'accounting-books', component: AccountingBooksComponent, data: { titulo: 'Accounting Books' } },
        // { path: 'productions', component: ProductionsComponent, data: { titulo: 'Productions Books' } },
        // { path: 'purchases', component: PurchasesComponent, data: { titulo: 'Purchase Books' } },
        // { path: 'reports', component: ReportsComponent, data: { titulo: 'Reports' } },
        // { path: 'suppliers', component: SuppliersComponent, data: { titulo: 'Suppliers' } },



      //   { path: '', redirectTo: '/bank', pathMatch: 'full' }
    

];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
//export class PrincipalRoutingModule { }
export const PAGES_ROUTES = RouterModule.forChild( principalRoutes );
