import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {MenuComponent} from "../menu/menu.component";
import {ApiService} from "../../shared/services/api.service";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [
    MenuComponent
  ],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css'
})
export class SingleProductComponent implements OnInit {

  @Input() id?: number;
  product!: Product;
  constructor(private apiService: ApiService,
              private cartService: CartService) {}


  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.product = data.find((product: Product) => product.id == this.id);
    });
  }

  addToCart() {
    console.log('Product added to cart:', this.product.name);
    console.log(this.id);
    // Implement the logic to add the product to the cart
    this.cartService.addToCart(this.product);
  }
}
