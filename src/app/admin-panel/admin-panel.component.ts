import { Component } from '@angular/core';
import {ProductManagementComponent} from "./product-management/product-management.component";
import {OrderManagementComponent} from "./order-management/order-management.component";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    ProductManagementComponent,
    OrderManagementComponent,
    MenuComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
