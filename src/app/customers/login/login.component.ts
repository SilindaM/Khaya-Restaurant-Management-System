import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Logins } from './logins';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LogaIn:Logins
  UserLogin:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getUSerLogin();
  }

  getUSerLogin(){
    this.UserLogin=this.fb.group({
      usernames:['',Validators.required],
      passwords:['',Validators.required]
    })
  }
  get UserNameValidator(){
    return this.UserLogin.get('usernames') as FormControl;
  }
  get PasswordValidator(){
    return this.UserLogin.get('passwords') as FormControl;
  }
  
  onSubmit(){
    
  }

}
