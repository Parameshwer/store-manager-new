import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';


import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatMenuModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { GeneratelabelComponent } from './dialogs/generatelabel/generatelabel.component';


@NgModule({
  declarations: [AdminComponent, StoreDetailsComponent, GeneratelabelComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,            
    MatMenuModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
  ],
  entryComponents: [GeneratelabelComponent]
})
export class AdminModule { }
