import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';


const principalRoutes: Routes = [
    {
      path: 'bank',
      component: BankComponent
    },
    {
      path: 'add-bank',
      component: AddBankComponent
    },
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
  