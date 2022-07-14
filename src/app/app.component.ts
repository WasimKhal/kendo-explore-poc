import { Component } from '@angular/core';
import { LineStyle, SeriesClickEvent, SeriesType } from "@progress/kendo-angular-charts";
import { groupBy, GroupResult } from '@progress/kendo-data-query';

interface iChart {
  name: string;
  color: string;
  value: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-explore-poc';
  public series = [
    {
      name: "India",
      data: [
        3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.89, 8.238, 9.552, 6.855,
      ],
    },
    {
      name: "Russia",
      data: [4.743, 7.295, 7.175, 6.376, 8.153, 8.535, 5.247, -7.832, 4.3, 4.3],
    },
    {
      name: "Germany",
      data: [
        0.01, -0.375, 1.161, 0.684, 3.7, 3.269, 1.083, -5.127, 3.69, 2.995,
      ],
    },
    {
      name: "USA",
      data: [
        1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727,
      ],
    },
  ];
  public categories: number[] = [
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
  ];
  public showSeries: boolean = false;
  public showTransitions: boolean = true;
  public style: LineStyle = "smooth";
  public chartType: SeriesType = "line";

  public toggleSeries() {
    this.showSeries = !this.showSeries;
    this.showTransitions = false;
  }

  public sData: iChart[] = [
    {
      name: '3rd Target',
      color: "#E86B36",
      value: 363,
    },
    {
      name: '2nd Target',
      color: "#6E007A",
      value: 283,
    },
    {
      name: '1st Target',
      color: "#E442A6",
      value: 216,
    },
    {
      name: '5th Target',
      color: "#764DC1",
      value: 114,
    },
    {
      name: '4th Target',
      color: "#D9B300",
      value: 61,
    },

  ];
  public onChange(e: any) {
    this.chartType = e.value;
  }

}


