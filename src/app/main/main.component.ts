import { Component, OnInit } from '@angular/core';
import { City } from './home.model';
import { MainService } from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  selectedcity: City;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.citySelecting
    .subscribe((city: City)=>
    {this.selectedcity = city})
  }

}
