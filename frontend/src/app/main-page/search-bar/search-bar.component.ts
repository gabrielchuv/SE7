import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Fooditem from 'src/app/models/fooditem';
import { SearchService } from 'src/app/common/services/search.service';
import { FormControl } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  //form control instance used for searching
  searchControl = new FormControl('');    //intial value is empty string as this will be updated when user enters something to search for...
  //array of food items, initially empty
  fooditems: Fooditem[] = [];
  //food item selected from search to add to list, @output exposes it to the parent
  @Output() onFoodPickedEvent = new EventEmitter<string>();
  //for saving fooditem name user is viewing in further detail
  userSearchFood: string = "";
  foodName: string = "";
  //link a search service instance on creation
  constructor(
    private searchService: SearchService,       //for using the search service we created
    private route: ActivatedRoute,              //for getting the current route
    private router: Router                      //for redirecting the user to another route
  ) { }
  //prevents access to ng things before its laoded on the page
  ngOnInit() {
    this.searchControl.valueChanges.subscribe((word: string) => {
      this.userSearchFood = word;
      console.log(`search word changing: ${word}`);
    });
  }

  onSearch() {
    if (this.userSearchFood == "") {
      //subscription displays database results and will update if there are any changes to the database files
      this.searchService.getFoods().subscribe((fooditems: any) => {
        this.fooditems = fooditems;
      })
    } else {
      this.searchService.getFood(this.userSearchFood).subscribe((fooditem: any) => {
        this.fooditems = [];
        if (fooditem != null) {
          this.fooditems.push(fooditem);
        } else {
          //push into it a new error food item
          this.fooditems.push({ _id: "error", name: "Item not found: try another one", mass: "error", cost: "error", category: "go away" });
        }
      })
    }
  }

  onFoodSelect(fooditem: any) {
    this.onFoodPickedEvent.emit(fooditem.name);
    console.log(`Emitting food item: ${fooditem}`);
  }
}
