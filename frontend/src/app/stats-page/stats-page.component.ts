import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { SearchService } from 'src/app/common/services/search.service';
import Bin from '../models/bin';

@Component({
    selector: 'app-stats-page',
    templateUrl: './stats-page.component.html',
    styleUrls: ['./stats-page.component.css']
  })

  export class StatsPageComponent implements OnInit {
    binsInDB: Bin[] = [];

    constructor(
      private searchService: SearchService
    ) { }



    ngOnInit() {
      this.searchService.getBins().subscribe((bins: any) => {
        if (bins != null) {
          this.binsInDB = bins;
        }
      })


      for(let i = 0; i < this.binsInDB.length; i++) {
        console.log('this is bin!!!!!!');
        console.log(this.binsInDB[i]);
      }

    }


}
