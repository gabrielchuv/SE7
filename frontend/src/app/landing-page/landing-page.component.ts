import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginOverlayComponent} from "./login-overlay/login-overlay.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  estimateControl = new FormControl('');

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onCalculateClick() {
    this.router.navigate(['../main'], {relativeTo: this.route});
  }
}
