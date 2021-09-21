import { Capital } from './../shared/capitals.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  countries: Capital[] = [
    new Capital('Astana', "Kazakhsatan")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
