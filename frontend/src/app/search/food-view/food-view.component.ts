import { Component, OnInit } from '@angular/core';
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

  //link a search service instance on creation
  constructor(private searchService: SearchService) { }

  //prevents access to ng things before its laoded on the page
  ngOnInit() {
    this.searchService.getFoods()
      .subscribe((fooditem: any) => this.fooditems = fooditem);
  }

}
