import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }, //redirectTo da pathMatch vermek zorundayız.
  { path: 'products/category/:categoryId' , component:ProductComponent}, // :categoryId kısmıu dinamik oldu : sayesinde
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
