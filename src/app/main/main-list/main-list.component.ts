import { City } from './../home.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MainService } from '../main.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
})
export class MainListComponent implements OnInit {
  cities: City[];
  constructor(private mainservice: MainService,
    private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.cities = this.mainservice.getCity();
  }
 
  onNewCity(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
