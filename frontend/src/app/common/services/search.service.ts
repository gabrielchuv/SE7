//frontend angular service which handles the http requests that will go to the backend api

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Fooditem from '../../models/fooditem';
import Bin from '../../models/bin';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly ROOT_URL;

  //set above to be backend server port...
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://18.219.146.56/api";
  }

  //create a bin
  createBin(usrID: string, food: string, quantity: string) {
    return this.http.post<Bin>(`${this.ROOT_URL}/bin/create`, { usrID, food, quantity });
  }

  //get all bins
  getBins() {
    return this.http.get(`${this.ROOT_URL}/bin/all`);
  }

  //get all bins of a specific user
  getBin(usrID: string) {
    return this.http.get(`${this.ROOT_URL}/bin/${usrID}`);
  }

  //update a bin !!!!!!!!probably dont need this!!!!!!! would be too hard to get _id of the bin to update
  updateBin(usrID: string, _id: string, bin: Bin) {
    return this.http.patch(`${this.ROOT_URL}/bin/${usrID}/${_id}`, { food: bin.food, quantity: bin.quantity });
  }

  //delete a bin
  deleteBin(id: string) {
    return this.http.delete(`${this.ROOT_URL}/bin/${id}`);
  }

  //create a food item
  createFood(name: string, mass: string, cost: string, category: string) {
    return this.http.post(`${this.ROOT_URL}/search/foods/create`, { name, mass, cost, category });
  }

  getFoods() {
    return this.http.get(`${this.ROOT_URL}/search/foods/all`);
  }

  //get a food item
  getFood(name: string) {
    return this.http.get<Fooditem[]>(`${this.ROOT_URL}/search/foods/${name}`);
  }

  //update a food item
  updateFooditem(name: string, fooditem: Fooditem) {
    return this.http.patch(`${this.ROOT_URL}/search/foods/${name}`, { name: fooditem.name, mass: fooditem.mass, cost: fooditem.cost, category: fooditem.category });
  }

  //delete a food item
  deleteFooditem(name: string) {
    return this.http.delete(`${this.ROOT_URL}/search/foods/${name}`);
  }
}
