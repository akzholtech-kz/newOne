import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { City } from '../home.model';
import { MainService } from '../main.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
 city: City;
 id: number;
  constructor(private route: ActivatedRoute,
    private mainService: MainService) { }

  ngOnInit(): void {
    this.route.params
    .subscribe((params: Params)=>{
      this.id = +params['id']
     this.city = this.mainService.getCities(this.id)
    })
  }

}
