import { EventEmitter } from "@angular/core";
import { City } from "./home.model";

export class MainService{
    citySelecting = new EventEmitter<City>();

  private  cities: City[] = [
        new City(
          'Astana',
          'Capital of Kazakhstan',
          'https://www.traveller.com.au/content/dam/images/h/1/5/i/o/y/image.related.articleLeadwide.620x349.h1cmga.png/1553130503713.jpg'
        ),
         new City(
          'Almaty',
          'Second-Capital of Kazakhstan',
          'https://melanie-klein-trust.org.uk/wp-content/uploads/2020/05/Almaty-600x400.jpg'
        ),
      ]; 

    getCity(){
        return this.cities.slice();
    }
    getCities(index: number){
     return this.cities[index];
    }
}