import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { IUser } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-manger',
  templateUrl: './customer-manger.component.html',
  styleUrls: ['./customer-manger.component.css']
})
export class CustomerMangerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(
// tslint:disable-next-line: variable-name
    private _serviceCustomersManger: CustomersService,
// tslint:disable-next-line: variable-name
    private _router: Router
  ) {}

  public listCust: IUser[];
  public messageError: string;
  ngOnInit() {
   this. displayCustomers();
  }
  public displayCustomers() {
    this._router.navigate(['customerManger']);
    this._serviceCustomersManger
      .getCustomers()
      .subscribe(
        res => (this.listCust = res),
        err => (this.messageError = err)
      );
  }
}
