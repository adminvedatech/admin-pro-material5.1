import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PAGES_ROUTES } from './pages-routing.module';
import { BankComponent } from './bank/bank.component';
import { CustomersComponent } from './customers/customers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
      BankComponent,
      CustomersComponent,
      SuppliersComponent,
      PagesComponent
    ],
    imports: [
      CommonModule,
      AngularMaterialModule,
      PAGES_ROUTES
      // PrincipalRoutingModule
    ]
  })
  export class PagesModule { }
  