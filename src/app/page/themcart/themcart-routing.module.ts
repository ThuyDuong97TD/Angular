import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemcartComponent } from './themcart.component';

const routes: Routes = [{ path: '', component: ThemcartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemcartRoutingModule { }
