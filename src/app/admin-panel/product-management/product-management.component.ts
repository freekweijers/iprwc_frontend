import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {Category} from "../../models/category.model";
import {ApiService} from "../../../shared/services/api.service";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {Product} from "../../models/product.model";
import {ToastrService} from "ngx-toastr";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-product-management',
  standalone: true,
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.css'
})
export class ProductManagementComponent implements OnInit {
  categories: Category[] = [];
  product!: Product;

  constructor(private apiService: ApiService,
              private toastr: ToastrService) {}

  onSubmit(productForm: NgForm) {
    this.product = productForm.value;
    this.product.category = <Category>this.categories.find(category => category.id == productForm.value.category);
    this.apiService.createProduct(this.product).subscribe({
      next: (response) => {
        // console.log(response.status);
        if (response.status === 201) {
          this.toastr.success('Product created', 'Success');
        }
        else {
          this.toastr.error('An error occured when creating product', 'Error');
        }
      }
    })
  }

  ngOnInit() {
    this.apiService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }
}
