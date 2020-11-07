import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isSubmitted=false;
  selected:File;
  categories:Category;
  productRegistration:FormGroup
  constructor(private fb:FormBuilder,private service:ProductsService) { }

  AddNewProductForm(){
    this.productRegistration=this.fb.group({
      pName:['',Validators.required],
      pPrice:['',Validators.required],
      pQuantity:['',Validators.required],
      pImage:['',Validators.required],
      pDescription:['',Validators.required],
      pCategory:['',Validators.required]
    })
  }
  get NameValidator(){
    return this.productRegistration.get('pName') as FormControl;
  }
  get PriceValidator(){
    return  this.productRegistration.get('pPrice')  as FormControl;
  }
  get QuantityValidator(){
    return  this.productRegistration.get('pQuantity') as FormControl;
  }
  get ImageValidator(){
    return  this.productRegistration.get('pImage')  as FormControl;
    
  }
  get DescriptionValidator(){
    return  this.productRegistration.get('pDescription')  as FormControl;
  }
  get CategoryValidator(){
    return  this.productRegistration.get('pCategory') as FormControl;
  }
  GetCategory(){
    this.service.getCategory().subscribe(data=>{
      this.categories=data;
    })
  }
  
  ResetForm(){
    this.productRegistration.reset();
  }
  onSubmit(){
    this.service.AddProduct(this.productRegistration.value);
  }
  ngOnInit(): void {
    this.AddNewProductForm();
    this.GetCategory();
  }
  
}
