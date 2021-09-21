import { City } from './../home.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  cities: City[] = [
    new City(
      'Astana',
      'Capital of Kazakhstan',
      'https://www.traveller.com.au/content/dam/images/h/1/5/i/o/y/image.related.articleLeadwide.620x349.h1cmga.png/1553130503713.jpg'
    ),
     new City(
      'Astana',
      'Capital of Kazakhstan',
      'https://www.traveller.com.au/content/dam/images/h/1/5/i/o/y/image.related.articleLeadwide.620x349.h1cmga.png/1553130503713.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
