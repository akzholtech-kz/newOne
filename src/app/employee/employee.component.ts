import { Capital } from './../shared/capitals.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CapitalService } from './capital.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnDestroy {
  countries: Capital[];
  idChange: Subscription;
  constructor(private capitalService: CapitalService) { }

  ngOnInit(): void {
   this.countries = this.capitalService.getCapital();
   this.idChange = this.capitalService.capitalChanged
   .subscribe((capital: Capital[])=>
   {this.countries = capital})
  }
 onEdit(index: number){
  this.capitalService.startEditing.next(index);
 }
ngOnDestroy(){
this.idChange.unsubscribe();
}
}
