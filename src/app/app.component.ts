import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ApiService} from "../shared/services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'IPRWC webshop';

  // constructor(private apiService: ApiService) {}
  //
  //
  //
  // ngOnInit(): void {
  // }


}
