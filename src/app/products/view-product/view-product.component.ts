import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../product';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

   producta:Products;
  constructor(private productservice:ProductsService,private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.productservice.getProducts().subscribe(data=>{
     this.producta=data;
     console.log(data);
   }) 
  }   
}
