//frontend angular service which handles the http requests that will go to the backend api

import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import Fooditem from '../../models/fooditem';
import Bin from '../../models/bin'

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private WebService: WebService) { }

  //create a bin 
  createBin( usrID: string , food: string, quantity: string) {
    return this.WebService.post('bin', { usrID, food, quantity });
  }

  //get all bins
  getBins() {
    return this.WebService.get('bin')
  }

  //get a bin
  getBin(id: string) {
    return this.WebService.get(`bin/${id}`);
  }

  //update a bin
  updateBin(usrID: string, _id: string, bin: Bin) {
    return this.WebService.patch(`bin/${usrID}/${_id}`, { food: bin.food, quantity: bin.quantity } )
  }

  //delete a bin
  deleteBin(id: string) {
    return this.WebService.delete(`bin/${id}`);
  }

  //create a food item
  createFood(name: string, mass: string, cost: string, category: string) {
    return this.WebService.post('search/foods/create', { name, mass, cost, category });
  }

  getFoods() {
    return this.WebService.get(`search/foods/all`);
  }

  //get a food item
  getFood(name: string) {
    return this.WebService.get(`search/foods/${name}`);
  }

  //update a food item
  updateFooditem(name: string, fooditem: Fooditem) {
    return this.WebService.patch(`search/foods/${name}`, { name: fooditem.name, mass: fooditem.mass, cost: fooditem.cost, category: fooditem.category})
  }

  //delete a food item
  deleteFooditem(name: string) {
    return this.WebService.delete(`search/foods/${name}`);
  }
}
