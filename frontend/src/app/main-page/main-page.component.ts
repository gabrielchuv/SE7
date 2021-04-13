import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
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
      
      list: number;
      total: number;

      constructor(
        private route: ActivatedRoute,              //for getting the current route
        private router: Router                      //for redirecting the user to another route
      ) { 
        this.list = 1;                              // Initialise quantity to be 1 by default
        this.total = this.list;                                             
      }

      ngOnInit() {
      }
      
      // Might have to re-evaluate once implementation from search to list is done
      increaseQuantity() {
        // Might want to initialise a max quantity value so it doesn't break the app
        this.list++;
        return this.total++;
      }

      decreaseQuantity() {
        if (this.list > 0) {
          this.list--;
          return this.total--;
        }
        return this.total;
      }

      getTotal() {
        return this.total;
      }

      toStats() {
        this.router.navigate(['../stats'], {relativeTo: this.route});
      }
}
