import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  username: string | null = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.username = this.authService.getUsername();
  }

  logout() {
    this.authService.signout();
  }
}
