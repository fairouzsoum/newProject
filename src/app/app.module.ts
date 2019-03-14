import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerMangerComponent } from './customer-manger/customer-manger.component';
import { HttpClientModule } from '@angular/common/http';
import { FundamentalNgxModule } from 'fundamental-ngx';
import { NavbarComponent } from './core/navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ModalComponent } from './core/modal/modal.component';

@NgModule({
  declarations: [AppComponent, CustomerMangerComponent, NavbarComponent, AboutComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FundamentalNgxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
