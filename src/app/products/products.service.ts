import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product';
import { HttpClient } from "@angular/common/http";
import { AddProductComponent } from './add-product/add-product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  dummydata="http://localhost:3000/products";
 public singleProduct:Products;
  constructor(private http:HttpClient) { }

getProducts():Observable <Products>{
     return this.http.get<Products>(this.dummydata);
}

AddProduct(ProductProperty:Products):Observable<Products>{
  const propro=this.dummydata;
  return this.http.post<Products>(propro,ProductProperty);
}
UpdateProduct(ProductProperty,ProductId):Observable<Products>{
  const prodpro=this.dummydata+ProductId;
  return this.http.put<Products>(prodpro,ProductProperty);
  }
DeleteProduct(ProductId){
  return this.http.delete(this.dummydata+'/'+ProductId);
}
}