import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {Productorder} from "../models/productorder.model";
import {ApiService} from "../../shared/services/api.service";
import {ToastrService} from "ngx-toastr";
import {CommonModule} from "@angular/common";
import {Customer} from "../models/customer.model";
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-customer-portal',
  standalone: true,
  imports: [
    MenuComponent,
    CommonModule
  ],
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.css'
})
export class CustomerPortalComponent implements OnInit{

  orders: Productorder[] = [];
  customer: Customer = {} as Customer;

  constructor(private apiService: ApiService,
              private customerService: CustomerService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.parseOrders();
    this.customerService.getCustomerFromApi();
    this.customer = this.customerService.getCustomer();
  }

  parseOrders() {
    this.apiService.getOrders().subscribe({
      next: (response) => {
        let body = JSON.stringify(response.body);
        let parsed = JSON.parse(body);
        if (response.status === 200) {
          this.orders = parsed;
        } else {
          this.toastr.error('An error occured when fetching orders', 'Error');
          // console.error('An error occured when fetching orders');
        }
      }
    })

  }


}
