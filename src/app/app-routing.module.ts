import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { PrincipalComponent } from './pages/principal.component';
import { NofoundComponent } from './nofound/nofound.component';
import { BankComponent } from './pages/bank/bank.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ProductsComponent } from './pages/products/products.component';
import { SuppliersComponent } from './pages/suppliers/suppliers.component';
import { ProductionsComponent } from './pages/productions/productions.component';
import { ReportsComponent } from './pages/reports/reports.component';

const appRoutes: Routes = [

  { path: '', component: PrincipalComponent,
    children: [
      { path: 'banks', component: BankComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'suppliers', component: SuppliersComponent },
      { path: 'productions', component: ProductionsComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'products', component: ProductsComponent },
      { path: '', redirectTo: '/banks', pathMatch: 'full' },

    ] },

  { path: 'login', component: LoginComponent },
 
  { path: '**', component: NofoundComponent },


 


  // { path: 'bank',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/bank/bank.module').then(m => m.BankModule)
  // },
  // { path: 'suppliers',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/suppliers/suppliers.module').then(m => m.SuppliersModule)
  // },
  // { path: 'accounting-books',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/accounting-books/accounting-books.module').then(m => m.AccountingBooksModule)
  // },
  // { path: 'customers',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/customers/customers.module').then(m => m.CustomersModule)
  // },
  // { path: 'productions',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/productions/productions.module').then(m => m.ProductionsModule)
  // },
  // { path: 'products',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)
  // },
  // { path: 'sales',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/sales/sales.module').then(m => m.SalesModule)
  // },
  // { path: 'purchases',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/purchases/purchases.module').then(m => m.PurchasesModule)
  // },
  // { path: 'reports',
  // canActivate: [ AuthGuard ],
  // loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
  // },
  // { path: 'login', component: LoginComponent },

];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
