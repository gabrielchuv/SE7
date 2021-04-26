import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/common/services/search.service';
import { MessageService } from '../common/services/message.service';
import Bin from '../models/bin';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  binList: Bin[] = [];
  runningTotal: number = 0;

  //link a search service instance on creation
  constructor(
    private searchService: SearchService,       //for using the seearch service we created
    private route: ActivatedRoute,              //for getting the current route
    private router: Router,                      //for redirecting the user to another route
    private messageService: MessageService       //for saving the yearly forecast of the bin
  ) {}

  //prevents access to ng things before its loaded on the page
  ngOnInit() {
  }

  addBinEntry(foodName: string) {
    console.log(`adding to the bin: ${foodName}`);
    this.binList.push(new Bin('1', foodName, "1"));
    this.runningTotal++;

    // sorting list of items alphabetically
    var temp = this.binList;
    this.binList = temp.sort((a, b) => a.food!.localeCompare(b.food!));
    console.log('sorted as: ' + this.binList);
  }

  //decrement quanity of the passed bin
  decrementQuantity(bin: any) {
    //parse to int
    var asNumber = parseInt(bin.quantity);
    //if its not 0
    if (asNumber > 0) {
      asNumber--;
      this.runningTotal--;
    }
    //turn back to string and set it
    bin.quantity = asNumber.toString();
    console.log(`decrementing amount to: ${bin.quantity}`);
  }

  //increment quanity of the passed bin
  incrementQuantity(bin: any) {
    var asNumber = parseInt(bin.quantity);
    asNumber++;
    this.runningTotal++;
    bin.quantity = asNumber.toString();
    console.log(`incrementing amount to: ${bin.quantity}`);
  }


  // send binList data to backend
  toStats() {
    console.log("redirecting to stats page and sending data...");
    for (let i = 0; i < this.binList.length; i++) {
      this.searchService.createBin(this.binList[i].usrID!, this.binList[i].food!, this.binList[i].quantity!)
        .subscribe((res) => console.log(`added bin: ${res} to database`));
    }
    //send binList to stats page to calculate yearly forecast
    this.messageService.setBinList(this.binList);
    this.router.navigate(['../stats'], { relativeTo: this.route });
  }

  //when remove button click, generates a new list  excluding the bin passed, save that back to this binList
  removeBinEntry(bin: Bin) {
    this.binList = this.binList.filter((binElement) => binElement != bin);
    //recalculate the total number of items
    this.runningTotal = 0;
    this.binList.forEach((binEntry) => {
      this.runningTotal += parseInt(binEntry.quantity!);
    })
  }
}
