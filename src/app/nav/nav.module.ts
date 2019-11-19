import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { Menu1Component } from '../menu1/menu1.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';



@NgModule({
  declarations: [Menu1Component],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [Menu1Component]
})
export class NavModule { }
