import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {Customer} from "../models/customer.model";
import {Product} from "../models/product.model";
import {CartService} from "../cart.service";
import {ApiService} from "../../shared/services/api.service";
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../customer.service";
import {Router, RouterLink} from "@angular/router";
import {Productorder} from "../models/productorder.model";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-finalize-order',
  standalone: true,
  imports: [
    MenuComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './finalize-order.component.html',
  styleUrl: './finalize-order.component.css'
})
export class FinalizeOrderComponent implements OnInit{
  customer!: Customer;
  cartItems!: Product[];
  finalPrice: number = 0;
  productOrder!: Productorder;

  constructor(private cartService: CartService,
              private apiService: ApiService,
              private customerService: CustomerService,
              private toastr: ToastrService,
              private router: Router) {
  }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.finalPrice = this.cartService.getTotal();
    this.customer = this.customerService.getCustomer();
    this.productOrder = {
      customer: this.customer,
      totalPrice: this.finalPrice
    }
  }

  placeOrder() {
    this.apiService.createOrder(this.productOrder).subscribe({
      next: (response) => {
        if (response.status === 201) {
          this.toastr.success('Order created', 'Success');
          this.cartService.clearCart();
          this.router.navigate(['/finalize-order']);
          // this.customerService;
        } else {
          this.toastr.error('An error occured when creating order', 'Error');
        }
      }
    })

  }
}
