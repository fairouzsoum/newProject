import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerMangerComponent } from './customer-manger/customer-manger.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/customerManger', pathMatch: 'full' },
  { path: 'customerManger', component: CustomerMangerComponent },
   { path: 'About', component: AboutComponent}
 /*  { path: '', component: 'customerManger'},
  { path: '', component: 'customerManger'},  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
