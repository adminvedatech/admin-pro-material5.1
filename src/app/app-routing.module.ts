import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { NofoundComponent } from './nofound/nofound.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [

 
  { path: 'login', component: LoginComponent },
 
 
{
  path: '',
  component: PagesComponent,
 loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
},
// {
//   path: 'bank',
//   // component: PagesComponent,
//  loadChildren: () => import('./pages/bank/bank.module').then(m => m.BankModule)
// },
{ path: '**', component: NofoundComponent },
   //{ path: 'accounting-books',
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
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
 })

 export class AppRoutingModule { }

// export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
