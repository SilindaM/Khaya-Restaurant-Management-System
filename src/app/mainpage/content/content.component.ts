import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/products/product';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

 

producta:Products;
  constructor(private services:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.services.getProducts().subscribe(data=>{
      this.producta=data;
    })
  }
  addToCart(){
    alert("added");
  }
}
