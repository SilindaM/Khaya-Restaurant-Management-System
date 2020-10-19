import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:'',component:HomeproductsComponent},
  {path:'addproduct',component:AddProductComponent},
  {path:'updateproduct',component:UpdateProductComponent},
  {path:'viewproduct',component:ViewProductComponent},
  {path:'deleteproduct',component:DeleteProductComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
