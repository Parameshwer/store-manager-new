import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatButtonModule,  MatIconModule, MatMenuModule,MatFormFieldModule,MatInputModule,MatSelectModule } from '@angular/material';
import { AdminService } from './admin/admin.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,    
    MatIconModule,
    MatMenuModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
