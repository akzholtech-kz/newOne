import { Subject } from "rxjs";
import { Capital } from "../shared/capitals.model";

export class CapitalService{
    capitalChanged = new Subject<Capital[]>();
    startEditing = new Subject<number>()
  private  countries: Capital[] = [
        new Capital('Astana', "Kazakhsatan"),
        new Capital('Almaty', "Kazakhsatan"),
      ]; 
    getCapital(){
        return this.countries.slice();
    }

    setArray(countries: Capital[]){
      this.countries = countries;
      this.capitalChanged.next(this.countries.slice())
    }

    addnewCapital(country: Capital){
        this.countries.push(country);
        this.capitalChanged.next(this.countries.slice())
    }
  getCountries(index: number){
    return this.countries[index];
  }
  updateCapital(index: number, newCountries: Capital){
    this.countries[index]= newCountries;
    this.capitalChanged.next(this.countries.slice())
  }

  
  onDeleteItem(index: number){
    this.countries.splice(index, 1)
    this.capitalChanged.next(this.countries.slice())
  }
}