import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { AddtableComponent } from './addtable/addtable.component';
import { ViewtablesComponent } from './viewtables/viewtables.component';


@NgModule({
  declarations: [AddtableComponent, ViewtablesComponent],
  imports: [
    CommonModule,
    TablesRoutingModule
  ],
  exports:[AddtableComponent, ViewtablesComponent]
})
export class TablesModule { }
