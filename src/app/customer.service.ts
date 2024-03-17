import { Injectable } from '@angular/core';
import {Customer} from "./models/customer.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customer: Customer = {} as Customer;

  constructor() {}

  setCustomer(customer: Customer) {
    this.customer = customer;
  }

  getCustomer(): Customer {
    return this.customer;
  }
}
