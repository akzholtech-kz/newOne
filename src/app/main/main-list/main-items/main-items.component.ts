import { Component, Input, OnInit } from '@angular/core';
import { City } from './../../home.model';

@Component({
  selector: 'app-main-items',
  templateUrl: './main-items.component.html',
  styleUrls: ['./main-items.component.css'],
})
export class MainItemsComponent implements OnInit {
  @Input() city: City;
  @Input() index:number;

  ngOnInit(): void {}
}
