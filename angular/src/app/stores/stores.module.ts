import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresListComponent } from './stores-list/stores-list.component';


@NgModule({
  declarations: [StoresListComponent],
  imports: [
    CommonModule,
    StoresRoutingModule
  ]
})
export class StoresModule { }
