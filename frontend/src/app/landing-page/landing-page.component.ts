import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginOverlayComponent} from "./login-overlay/login-overlay.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  estimateControl = new FormControl('');

  public name: any = 0;

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onCalculateClick() {
    this.router.navigate(['../main'], {relativeTo: this.route});
  }

  changeLabelName() {
    var temp: number = parseInt(this.name) + 10;
    this.name = temp.toString();

  }
}
