import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
   productId:number;
  constructor(private productservice:ProductsService,private actRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  
  }   
  getAllProducts(){
    return this.productservice.getProducts().subscribe(data=>{
      this.producta=data;
    })
  }
  deleteProduct(id:number){
      this.productservice.DeleteProduct(id).subscribe((data:Products)=>{
        this.getAllProducts();
      })
  }
}
