import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private WebService: WebService) { }

  //create a food item
  createBin(food: string, quantity: string) {
    return this.WebService.post('bin', { food, quantity });
  }

  //get all food items
  getBins() {
    return this.WebService.get('search/foods')
  }

  //get a food item
  getBin(name: string) {
    return this.WebService.get(`search/foods/${name}`);
  }

  //create a food item
  createFood(name: string, mass: string, cost: string, category: string) {
    return this.WebService.post('search/foods/create', { name, mass, cost, category });
  }

  //get all food items
  getFoods() {
    return this.WebService.get('search/foods')
  }

  //get a food item
  getFood(name: string) {
    return this.WebService.get(`search/foods/${name}`);
  }

  //update a food item


}
