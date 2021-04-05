import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Fooditem from 'src/app/models/fooditem';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-food-view',
  templateUrl: './food-view.component.html',
  styleUrls: ['./food-view.component.css']
})
export class FoodViewComponent implements OnInit {

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
    //using the get ALL foods method to pass back the current fooditems observable
    //subscribe enables us to asynchronously monitor the above observable for any changes and automatically change if there are some
    this.searchService.getFoods()
      .subscribe((fooditems: any) => this.fooditems = fooditems);
    
    //get the uri foodname and search for it using the foodname
    this.route.params.subscribe((params: Params) => {
      this.fooditemName = params.foodname;  //get the name of the food from the uri and save it to class
      if (!this.fooditemName) return;          //if null return...
      this.searchService.getFood(this.fooditemName).subscribe((fooditem: any) => this.fooditem = fooditem);
    })
  }


  onCloseClick() {
    
  }

  onCreateClick() {
    //this.searchService.createFood;
  }

  onDeleteClick(fooditem: Fooditem) {
    console.log(fooditem);
    this.searchService.deleteFooditem(this.fooditemName)
      .subscribe((fooditems: any) => this.fooditems = this.fooditems.filter(f => f.name != fooditem.name));
  }

  searchForFoods(value: string) {
    this.searchService.getFood(value)
      .subscribe(() => this.fooditems = this.fooditems.filter(f => f.name == value));
  }
}
