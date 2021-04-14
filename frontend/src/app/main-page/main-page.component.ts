import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/common/services/search.service';
import Bin from '../models/bin';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {
  binList: Bin[] = [];

  //link a search service instance on creation
  constructor(
    private searchService: SearchService,       //for using the seearch service we created
    private route: ActivatedRoute,              //for getting the current route
    private router: Router                      //for redirecting the user to another route
  ) { }

  //prevents access to ng things before its laoded on the page
  ngOnInit() {
  }

  toStats() {
    this.router.navigate(['../stats'], { relativeTo: this.route });
  }
}
