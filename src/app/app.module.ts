import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {routes} from "./app.routes";
import {ProductsComponent} from "./products/products.component";
import {CommonModule} from "@angular/common";
import {HomepageComponent} from "./homepage/homepage.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CartComponent} from "./cart/cart.component";
import {CartService} from "./cart.service";
import {ProductManagementComponent} from "./admin-panel/product-management/product-management.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule, // required for toastr
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    LoginComponent,
    ProductsComponent,
    HomepageComponent,
    RouterModule.forRoot(routes, { bindToComponentInputs: true }),
    RouterOutlet,
    NgbModule,
    CartComponent,
    ProductManagementComponent,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
