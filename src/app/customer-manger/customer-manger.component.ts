import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-customer-manger',
  templateUrl: './customer-manger.component.html',
  styleUrls: ['./customer-manger.component.css']
})
export class CustomerMangerComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _serviceCustomersManger: CustomersService) {}

  public listCust: IUser[];
  public messageError: string;
  ngOnInit() {}
  public displayCustomers() {
    this._serviceCustomersManger
      .getCustomers()
      .subscribe(
        res => (this.listCust = res),
        err => (this.messageError = err)
      );
  }
}
