import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatMenuModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';
import { StoreDetailsComponent } from './store-details/store-details.component';


@NgModule({
  declarations: [AdminComponent, StoreDetailsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,            
    MatMenuModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule    
  ]
})
export class AdminModule { }
