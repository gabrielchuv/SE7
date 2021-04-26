import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SearchService } from 'src/app/common/services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import Bin from '../models/bin';

@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css']
})

export class StatsPageComponent implements OnInit {
  binEntryTotal: number = 0;
  totalCost: number = 0;
  i: number = 0;
  displayText = '';

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  
  ngOnInit() {
    this.searchService.getBins().subscribe((bins: any) => {
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

            /* Change display text depending on yearly money wasted */
            if(this.totalCost > 356){
              this.displayText = `That is £${Math.round(this.totalCost - 356)} more than the average person in the UK.`;
            }
            else {this.displayText = `That is £${Math.round(356 - this.totalCost)} less than the average person in the UK.`}
        
            console.log(`bin entry: ${this.i++} total bin entry cost: ${this.binEntryTotal.toFixed(2)}`);
          })
        });

        console.log(bins); //for debugging
      }
    })
  }

  onNavClick() {
    this.router.navigate(['../home'], {relativeTo: this.route});
  }



}
