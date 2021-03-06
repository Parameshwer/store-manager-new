import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StoreDetailsComponent } from './store-details/store-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  },
  {
    path: 'store/:id',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
