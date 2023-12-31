import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'product-add-1', component: ProductAddForms1Component },
  { path: 'product-add-2', component: ProductAddForms2Component },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, //redirectTo da pathMatch vermek zorundayız.
  { path: 'products/category/:categoryId' , component:ProductComponent}, // :categoryId kısmıu dinamik oldu : sayesinde
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
