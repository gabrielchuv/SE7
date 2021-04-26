import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SearchService } from 'src/app/common/services/search.service';
import { MessageService } from '../common/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import Bin from '../models/bin';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})

export class StatsPageComponent implements OnInit {
  binEntryTotal: number = 0;
  binTotal: number = 0;
  i: number = 0;
  binList: Bin[] = [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  //on page build
  ngOnInit() {
    //get the total cost from the messaging service
    this.binList = this.messageService.getBinList();
    this.binList.forEach((binEntry) => {
      if (binEntry != null) {
        //get the foods cost from the database
        this.searchService.getFood(binEntry.food!)
          .subscribe((fooditem: any) => {
            //get the total cost of the binEntry (= food.cost x bin.quantity)
            this.binEntryTotal = parseFloat(fooditem[0].cost) * parseInt(binEntry.quantity!);
            console.log(`Bin entry: food:${binEntry.food} cost:${fooditem[0].cost} quantity=${binEntry.quantity!}`);
            //calculate a running total for the year
            this.binTotal += this.binEntryTotal * 52;
          })
      }
    })
  }

  onNavClick() {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }
}

//get the total cost of the users binS:
/*this.searchService.getBins().subscribe((bins: any) => {
  if (bins != null) {
    //go through each entry in bins
    bins.forEach((binEntry: any) => {
      //search food items with the food name
      this.searchService.getFood(binEntry.food!).subscribe((foods) => {
        //foods is an array but there SHOULD only be one food item in it, so get its zeroth elements cost
        //multiply it by the quantity and save the total BIN ENTRY cost

        this.binEntryTotal = parseFloat(foods[0].cost!) * parseInt(binEntry.quantity!);

        //add the bin entry cost to the total
        this.totalCost += this.binEntryTotal;

        console.log(`bin entry: ${this.i++} total bin entry cost: ${this.binEntryTotal.toFixed(2)}`);
      })
    });

    console.log(bins); //for debugging
  }
})*/

/*
calculateTotal() {
    let calculation = new Promise((resolve, reject) => {
      //go through each food item in list
      this.binList.forEach((binEntry: any) => {
        console.log(binEntry.food);
        if (binEntry != null) {
          //get the foods cost from the database
          this.searchService.getFood(binEntry.food!)
            .subscribe((fooditem: any) => {
              this.fooditemCost = parseFloat(fooditem[0].cost);
              //get the total cost of the binEntry (= food.cost x bin.quantity)
              this.binTotal += this.fooditemCost * parseInt(binEntry.quantity);
            })
          }
        })
      })
      calculation.then(() => {
        //multiply binTotal by 52 (weeks) to get the yearly forecast
        this.binTotal *= 52;
        //save yearly forecast to messageService
        this.messageService.setBinTotal(this.binTotal);
        console.log(`yearly forecast: ${this.binTotal}`);
    })
  }
*/
