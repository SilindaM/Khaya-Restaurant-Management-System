import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'orders',loadChildren:()=>import('./orders/orders.module').then(m=>m.OrdersModule)},
  {path:'customers',loadChildren:()=>import('./customers/customers.module').then(m=>m.CustomersModule)},
  {path:'bills',loadChildren:()=>import('./bills/bills.module').then(m=>m.BillsModule)},
  {path:'products',loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)},
  {path:'staff',loadChildren:()=>import('./staff/staff.module').then(m=>m.StaffModule)},
  {path:'tables',loadChildren:()=>import('./tables/tables.module').then(m=>m.TablesModule)},
  {path:'menu',loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
