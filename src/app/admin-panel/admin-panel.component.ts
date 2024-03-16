import { Component } from '@angular/core';
import {ProductManagementComponent} from "./product-management/product-management.component";

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    ProductManagementComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

}
