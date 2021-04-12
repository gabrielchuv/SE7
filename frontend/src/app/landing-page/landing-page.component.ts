import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,) {

  }

  ngOnInit(): void {
  }

  onCalculateClick() {
    this.router.navigate(['../main'], {relativeTo: this.route});
  }
}
