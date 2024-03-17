import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {FormsModule, NgForm} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {CommonModule} from "@angular/common";
import {ApiService} from "../../shared/services/api.service";
import {Customer} from "../models/customer.model";
import {ToastrService} from "ngx-toastr";
import {CustomerService} from "../customer.service";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    MenuComponent,
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './customer-register.component.html',
  styleUrl: './customer-register.component.css'
})
export class CustomerRegisterComponent implements OnInit{
  customer!: Customer;
  username: string | null = '';

  constructor(private authService: AuthService,
              private apiService: ApiService,
              private toastr: ToastrService,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
    this.username = this.authService.getUsername();
    if (this.username != null && this.customerService.getCustomer().name != null) {
      // console.log(this.customerService.getCustomer())
      this.existingCustomer();
    }
  }


  existingCustomer() {
    this.customerService.getCustomer().optionalRegisteredUser = { username: "user" };
    this.router.navigate(['/finalize-order']);
  }

  onSubmit(customerForm: NgForm) {
    // console.log('Form Submitted', this.customer);
    this.customer = customerForm.value;
    if (this.username != null) {
      this.customer.optionalRegisteredUser = { username: this.username };
    }

    this.apiService.createCustomer(this.customer).subscribe({
      next: (response) => {
        let body = JSON.stringify(response.body);
        let parsed = JSON.parse(body);
        if (response.status === 201) {
          this.toastr.success('Customer created', 'Success');
          // console.log('Customer created', parsed.id);
          this.customer.id = parsed.id;
          this.customerService.setCustomer(this.customer);
          this.router.navigate(['/finalize-order']);
          // console.log('Customer created');
        }
        else {
          this.toastr.error('An error occured when creating customer', 'Error');
          console.error('An error occured when creating customer');
        }
      }
    })

  }

}
