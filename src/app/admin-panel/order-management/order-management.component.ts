import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";
import {ProductOrder} from "../../models/productorder.model";
import {ToastrService} from "ngx-toastr";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-order-management',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-management.component.html',
  styleUrl: './order-management.component.css'
})
export class OrderManagementComponent implements OnInit {
  productOrders: ProductOrder[] = [];

  constructor(private apiService: ApiService,
              private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }

  updateStatus(order: ProductOrder, newStatus: string): void {
    order.status = newStatus;
    if (order.id != null) {
      this.apiService.updateOrderStatus(order.id, newStatus).subscribe((response) => {
        if (response.status === 200) {
          this.toastr.success('Order status updated', 'Success');
        } else {
          this.toastr.error('An error occured when updating order status', 'Error');
        }
      });
    }
  }

  fetchOrders(): void {
    this.apiService.getAllOrders().subscribe((response) => {
      let body = JSON.stringify(response.body);
      let parsedOrders = JSON.parse(body);
      if (response.status === 200) {
        this.productOrders = parsedOrders;
      } else {
        this.toastr.error('An error occured when fetching orders', 'Error');
      }
    });
  }
}
