import { Capital } from 'src/app/shared/capitals.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapitalService } from './../employee/capital.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private capitalService: CapitalService,
    private http: HttpClient
  ) {}

  storageData() {
    const countries = this.capitalService.getCapital();
    this.http
      .put(
        'https://newproject-6c30e-default-rtdb.firebaseio.com/countries.json',
        countries
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchData() {
    this.http
      .get<Capital[]>(
        'https://newproject-6c30e-default-rtdb.firebaseio.com/countries.json'
      )
      .subscribe((response) => {this.capitalService.setArray(response)});
  }
}
