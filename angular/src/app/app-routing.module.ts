import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then(mod => mod.StoresModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./billing/billing.module').then(mod => mod.BillingModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: '',
    redirectTo: 'stores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),    
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

