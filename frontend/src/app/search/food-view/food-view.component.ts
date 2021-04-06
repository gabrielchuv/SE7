import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Fooditem from 'src/app/models/fooditem';
import { SearchService } from 'src/app/search.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.css']
})
export class FoodViewComponent implements OnInit {

  //form control instance used for searching
  searchControl = new FormControl('');    //intial value is empty string as this will be updated when user enters something to search for...
  //array of food items, initially empty
  fooditems: Fooditem[] = [];
  //food item (on click display info)
  fooditem: Fooditem | any;
  //for saving fooditem name user is viewing in further detail
  fooditemName: string = "";

  //link a search service instance on creation
  constructor(
    private searchService: SearchService,       //for using the seearch service we created
    private route: ActivatedRoute,              //for getting the current route
    private router: Router                      //for redirecting the user to another route
  ) { }

  //prevents access to ng things before its laoded on the page
  ngOnInit() {
  }

  onSearch() {
    let foodString = this.searchControl.value;
    //get all foods if user hasnt type in a food
    if (foodString == "") {
      this.searchService.getFoods()
        .subscribe((fooditems: any) => this.fooditems = fooditems);
    //get specific food item user has searched for
    } else {
      this.searchService.getFood(foodString)
        .subscribe(() => this.fooditems = this.fooditems.filter(f => f.name == foodString));   //.filter will return a filtered array where conds match, need to save that back into classes array
    }
  }

  /*onFoodIconClick() {
    this.route.params.subscribe((params: Params) => {
      this.fooditemName = params.foodname;  //get the name of the food from the uri and save it to class
      if (!this.fooditemName) return;          //if null return...
      this.searchService.getFood(this.fooditemName).subscribe((fooditem: any) => this.fooditem = fooditem);
    })
  }*/

  onCreateClick() {
  }

  onDeleteClick(fooditem: Fooditem) {
    console.log(fooditem);
    this.searchService.deleteFooditem(this.fooditemName)
      .subscribe((fooditems: any) => this.fooditems = this.fooditems.filter(f => f.name != fooditem.name));
  }

  onAddToBinClick(fooditem: Fooditem) {
    
  }
}
