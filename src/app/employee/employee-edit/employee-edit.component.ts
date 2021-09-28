import { DataStorageService } from './../../shared/datastorage.service';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Capital } from 'src/app/shared/capitals.model';
import { CapitalService } from '../capital.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css'],
})
export class EmployeeEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') epForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editItem: Capital;
  constructor(private capitalService: CapitalService, private dataService: DataStorageService) {}

  ngOnInit(): void {
    this.subscription = this.capitalService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.capitalService.getCountries(index);
        this.epForm.setValue({
          capital: this.editItem.name,
          country: this.editItem.cntr,
        });
      }
    );
  }
  onSubmitItem(form: NgForm) {
    const value = form.value;
    const newCountries = new Capital(value.capital, value.country);
    if(this.editMode){
      this.capitalService.updateCapital(this.editedItemIndex, newCountries)
    }else{
      this.capitalService.addnewCapital(newCountries);
    }
    this.editMode = false;
    form.reset();
  }
  onDelete(){
    this.capitalService.onDeleteItem(this.editedItemIndex)
    this.epForm.reset();

  }
  onSaveData(){
    this.dataService.storageData();
  }
  onFetchdata(){
    this.dataService.fetchData();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
