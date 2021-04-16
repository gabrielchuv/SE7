import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginOverlayComponent} from "./login-overlay/login-overlay.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  onCalculateClick() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    dialogConfig.height = "50%";
    dialogConfig.panelClass = 'login';
    this.dialog.open(LoginOverlayComponent, dialogConfig)
  }
}
