import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {CartService} from "../cart.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MenuComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    // Update items to reflect the current state of the cart
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
  }

  checkout() {

  }
}
