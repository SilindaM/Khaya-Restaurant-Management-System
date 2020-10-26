import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainpageRoutingModule } from './mainpage-routing.module';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [HomeComponent, TopComponent, ContentComponent],
  imports: [
    CommonModule,
    MainpageRoutingModule
  ],
  exports :[HomeComponent,TopComponent,ContentComponent]
})
export class MainpageModule { }
