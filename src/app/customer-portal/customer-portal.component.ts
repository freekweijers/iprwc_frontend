import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {Productorder} from "../models/productorder.model";
import {ApiService} from "../../shared/services/api.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-customer-portal',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './customer-portal.component.html',
  styleUrl: './customer-portal.component.css'
})
export class CustomerPortalComponent implements OnInit{

  orders: Productorder[] = [];

  constructor(private apiService: ApiService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.parseOrders();
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
