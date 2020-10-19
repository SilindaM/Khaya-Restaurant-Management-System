import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { HomeproductsComponent } from './homeproducts/homeproducts.component';


@NgModule({
  declarations: [AddProductComponent, ViewProductComponent, UpdateProductComponent, DeleteProductComponent, HomeproductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports :[AddProductComponent, ViewProductComponent, UpdateProductComponent, DeleteProductComponent]
})
export class ProductsModule { }
