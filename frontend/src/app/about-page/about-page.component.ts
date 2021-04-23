import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  panelOpenState = false;
  
  constructor(private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  onNavClick() {
    this.router.navigate(['../home'], {relativeTo: this.route});
  }

}
