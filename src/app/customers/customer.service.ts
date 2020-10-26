import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerList="assets/data/customers.json"
  constructor(private http:HttpClient) { }

  RegisterUSer(CustomerDetails):Observable<Customer>{
      const addCustomer=this.customerList;
      return this.http.put<Customer>(addCustomer,CustomerDetails);
  }
  
}
