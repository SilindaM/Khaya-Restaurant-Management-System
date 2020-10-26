import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  exports:[RegisterComponent,LoginComponent]
})
export class CustomersModule { }
