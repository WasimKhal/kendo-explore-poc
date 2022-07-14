import { Component, OnInit } from '@angular/core';
import { SeriesClickEvent } from "@progress/kendo-angular-charts";

@Component({
  selector: 'app-chart-control',
  templateUrl: './chart-control.component.html',
  styleUrls: ['./chart-control.component.css']
})
export class ChartControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public isDrillDownEnabled = false;
  public drillData: number[] = [];
  public seriesItemColor = "";
  public onClick(e: SeriesClickEvent | any): void {
    this.drillData = e.series.data;
    this.seriesItemColor = e.point.color;
    this.isDrillDownEnabled = true;
  }

  public goBack(): void {
    this.isDrillDownEnabled = false;
    this.drillData = [];
  }

}
