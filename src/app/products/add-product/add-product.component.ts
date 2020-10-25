import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  isSubmitted=false;
  productRegistration:FormGroup
  constructor(private fb:FormBuilder) { }

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
  
  onSubmit(){
    this.isSubmitted=true;
    if(!this.productRegistration.valid){
      return  false;
    }
    else{
      alert(JSON.stringify(this.productRegistration.value))
    }
  }
  ngOnInit(): void {
    this.AddNewProductForm();
  }
  
}
