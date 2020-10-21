import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from './product';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

 public dummydata="assets/data/product.json";
  constructor(private http:HttpClient) { }

getProducts():Observable<Products>{
     return this.http.get<Products>(this.dummydata);
     }
  }