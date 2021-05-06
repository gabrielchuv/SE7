import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { SearchService } from 'src/app/common/services/search.service';
import { MessageService } from '../common/services/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import Bin from '../models/bin';



@Component({
  selector: 'app-stats-page',
  templateUrl: './stats-page.component.html',
  styleUrls: ['./stats-page.component.css'],
})

export class StatsPageComponent implements OnInit {
  binEntryTotal: number = 0;
  binTotal: number = 0;
  i: number = 0;
  binList: Bin[] = [];
  displayText = '';
  weeklyEstimate: string = "0";
  yearlyEstimate: string = "0";
  faPowerOff = faPowerOff;
  faFacebook = faFacebookF;
  faTwitter = faTwitter;


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
            //calculate a running total for the year
            this.binTotal += this.binEntryTotal * 52;
            //conditional text to compare forecaste with average money wasted in the UK
            if(this.binTotal > 356){
              this.displayText = `That is £${Math.round(this.binTotal - 356)} more than the average person in the UK.`;
            }
            else {this.displayText = `That is £${Math.round(356 - this.binTotal)} less than the average person in the UK.`}
          })
      }
    })

    // get estimates from messaging service
    if (this.messageService.getEstimate() !== "") {
      this.weeklyEstimate = this.messageService.getEstimate();
      // calculate yearly estimate based on weekly estimate
      this.yearlyEstimate = (parseInt(this.weeklyEstimate) * 52).toString();
    }

  }

  onNavClick() {
    this.router.navigate(['../home'], { relativeTo: this.route });
  }

  fbShare() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F18.219.146.56%2F&amp;src=sdkpreparse");
  }

  twitterShare() {
    window.open("https://twitter.com/share");
  }


}
