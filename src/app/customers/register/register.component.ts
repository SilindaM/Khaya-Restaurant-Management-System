import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterUser:FormGroup;
  constructor(private  fb:FormBuilder) { }

  
  RegisterUserChecks(){
    this.RegisterUser=this.fb.group({
      CfirstName:['',Validators.required],
      Csurname:['',Validators.required],
      Cemail:['',Validators.required,Validators.email],
      Ccellphone:['',Validators.required],
      Cpassword:['',Validators.required],
      Cconfirm:['',Validators.required]
    })
    }
    
    ngOnInit(): void {
      this.RegisterUserChecks();
    }
    get NameValidator(){
      return this.RegisterUser.get('CfirstName') as FormControl;
    }
    get SurnameValidator(){
      return this.RegisterUser.get('Csurname') as FormControl;
    }
    get EmailValidator(){
      return this.RegisterUser.get('Cemail') as FormControl;
    }
    get CellphoneValidator(){
      return this.RegisterUser.get('Ccellphone') as FormControl;
    }
    get PasswordValidator(){
      return this.RegisterUser.get('Cpassword') as FormControl;
    }
    get ConfirmPasswordValidator(){
      return this.RegisterUser.get('Cconfirm') as FormControl;
    }
    onSubmit(){}

}
