import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product';
import { HttpClient } from "@angular/common/http";
import { AddProductComponent } from './add-product/add-product.component';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dummydata="assets/data/product.json";
 public singleProduct:Products;
  constructor(private http:HttpClient) { }

getProducts():Observable <Products>{
     return this.http.get<Products>(this.dummydata);
}
ViewProduct(productId):Observable<Products>{
  const productView=this.dummydata+productId;
  return this.http.get<Products>(productView);
}

AddProduct(ProductProperty):Observable<Products>{
  const propro=this.dummydata;
  return this.http.post<Products>(propro,ProductProperty);
}
UpdateProduct(ProductProperty,ProductId):Observable<Products>{
  const prodpro=this.dummydata+ProductId;
  return this.http.put<Products>(prodpro,ProductProperty);
  }
DeleteProduct(ProductId){
  const produ=this.dummydata+ProductId;
  return this.http.delete(produ);
}
getCategory():Observable<Category>{
  const categorylist="assets/data/category.json";
  return  this.http.get<Category>(categorylist);
  }
}