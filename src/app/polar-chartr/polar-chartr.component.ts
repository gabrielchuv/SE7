import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polar-chartr',
  templateUrl: './polar-chartr.component.html',
  styleUrls: ['./polar-chartr.component.css']
})
export class PolarChartrComponent implements OnInit {
  public polarChartLabels = ['10', '20', '30'];
  public polarChartData = [10, 20, 30];
  public polarChartType = 'polarArea';
  
  constructor() { }

  ngOnInit(): void {
  }

}
