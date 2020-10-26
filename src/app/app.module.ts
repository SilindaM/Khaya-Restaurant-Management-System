import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsModule } from "./products/products.module";
import { HttpClientModule } from '@angular/common/http';
import { TablesModule } from './tables/tables.module';
import { MainpageModule } from './mainpage/mainpage.module';
import { CustomersModule } from './customers/customers.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HttpClientModule,
    TablesModule,
    MainpageModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
