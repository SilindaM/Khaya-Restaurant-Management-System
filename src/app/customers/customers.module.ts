import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CustomerlistComponent } from './customerlist/customerlist.component';


@NgModule({
  declarations: [RegisterComponent, LoginComponent, CustomerlistComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ],
  exports:[RegisterComponent,LoginComponent,CustomerlistComponent]
})
export class CustomersModule { }
