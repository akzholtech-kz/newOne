import { City } from './../../home.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-items',
  templateUrl: './main-items.component.html',
  styleUrls: ['./main-items.component.css']
})
export class MainItemsComponent implements OnInit {
 @Input() city: City;
  constructor() { }

  ngOnInit(): void {
  }

}
