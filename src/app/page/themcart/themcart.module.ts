import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemcartRoutingModule } from './themcart-routing.module';
import { ThemcartComponent } from './themcart.component';


@NgModule({
  declarations: [
    ThemcartComponent
  ],
  imports: [
    CommonModule,
    ThemcartRoutingModule
  ]
})
export class ThemcartModule { }
