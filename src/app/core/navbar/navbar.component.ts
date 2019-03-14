import { Component, OnInit } from '@angular/core';
import { CustomersService } from 'src/app/customers.service';
import { IUser } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
// tslint:disable-next-line: variable-name
  constructor(private _serviceCustomersManger: CustomersService, private _router: Router) { }
  public customers;
  public listCust: IUser[];
  public messageError: string;
  ngOnInit() { }
  public displayCustomers() {
    this._router.navigate(['customerManger']);
    this.customers = this._serviceCustomersManger
      .getCustomers()
      .subscribe(
        res => (this.listCust = res),
        err => (this.messageError = err)
      );
  }
}
