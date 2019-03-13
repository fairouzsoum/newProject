import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private _HTTP: HttpClient) {}
  /* public listCust: Array<any>;
  public messageError: string; */
  getCustomers() {
    return this._HTTP.get<IUser[]>('https://api.myjson.com/bins/pl056');
    /* .subscribe(
        res => (this.listCust = res),
        err => (this.messageError = err)
      ); */
  }
}
