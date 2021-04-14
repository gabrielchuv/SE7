import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import Fooditem from 'src/app/models/fooditem';
import { SearchService } from 'src/app/common/services/search.service';
import { FormControl } from '@angular/forms';
import { Observable, observable } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

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
        this.router.navigate(['../stats'], {relativeTo: this.route});
      }

}
