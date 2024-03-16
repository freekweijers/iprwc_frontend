import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductsComponent} from "./products/products.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {SingleProductComponent} from "./single-product/single-product.component";
import {CartComponent} from "./cart/cart.component";
import {AdminPanelComponent} from "./admin-panel/admin-panel.component";

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    // canActivate: [loginGuard],
  },
  {
    path: 'register',
    component: RegisterComponent
    // canActivate: [loginGuard],
  },
  {
    path: 'products',
    component: ProductsComponent
    // canActivate: [loginGuard],
  },
  {
    path: 'index',
    component: HomepageComponent
    // canActivate: [loginGuard],
  },
  {
    path: 'products/:id',
    component: SingleProductComponent
    // canActivate: [loginGuard],
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'admin',
    component: AdminPanelComponent
  }
];
