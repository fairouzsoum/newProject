import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMangerComponent } from './customer-manger/customer-manger.component';

const routes: Routes = [
  { path: '', redirectTo: '/customerManger', pathMatch: 'full' },
  { path: 'customerManger', component: CustomerMangerComponent }
  /*  { path: '', component: 'customerManger'},
  { path: '', component: 'customerManger'},
  { path: '', component: 'customerManger'}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
