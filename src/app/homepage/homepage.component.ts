import {Component, OnInit} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {NgbCarousel, NgbSlide} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MenuComponent,
    NgbCarousel,
    NgbSlide
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {
  slides = [
    {
      img: 'https://www.autoscout24.nl/cms-content-assets/7ftGD2u6EoRO0uFUIL8y3E-48f1e291e04109626743fd772b89645b-bmw-m2-front-1100.jpeg',
      text: 'Uitverkoop'
    },
    {
      img: 'https://www.autoscout24.nl/cms-content-assets/7ftGD2u6EoRO0uFUIL8y3E-48f1e291e04109626743fd772b89645b-bmw-m2-front-1100.jpeg',
      text: 'Knipperlichten niet inbegrepen'
    },
    {
      img: 'https://www.autoscout24.nl/cms-content-assets/7ftGD2u6EoRO0uFUIL8y3E-48f1e291e04109626743fd772b89645b-bmw-m2-front-1100.jpeg',
      text: 'Tijdelijk gratis Stereo upgrade'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
