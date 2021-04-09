import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() {
    console.log('width ' + window.innerWidth);
  }

  ngOnInit(): void {
  }
}
