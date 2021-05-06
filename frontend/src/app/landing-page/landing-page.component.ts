import { Component, OnInit } from '@angular/core';
import {platformBrowser} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginOverlayComponent} from "./login-overlay/login-overlay.component";
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MessageService } from '../common/services/message.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  estimateControl = new FormControl('');
  public estimate: any = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
  }

  onCalculateClick() {
    // Prevents user from going to main page without an estimate
    if (this.estimate == 0) {
      window.alert("Please enter a estimate by clicking on the pot-of-money icon.");
    } else {
      // store estimate to use in stats page
      this.messageService.setEstimate(this.estimate.toString());
      this.router.navigate(['../main'], {relativeTo: this.route});
    }
  }

  changeLabelName() {
    var temp: number = parseInt(this.estimate) + 5;
    this.estimate = temp.toString();
  }
}
