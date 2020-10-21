import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddtableComponent } from './addtable/addtable.component';
import { ViewtablesComponent } from './viewtables/viewtables.component';

const routes: Routes = [
  {path:'addtable',component:AddtableComponent},
  {path:'viewtables',component:ViewtablesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
