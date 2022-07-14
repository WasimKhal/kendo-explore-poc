import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LegendTitle, SeriesVisualArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl'
import { Circle } from '@progress/kendo-drawing';
import { Circle as GeomCircle } from '@progress/kendo-drawing/geometry';


@Component({
  selector: 'opportunity-chart',
  templateUrl: './opportunity-chart.component.html',
  styleUrls: ['./opportunity-chart.component.css']
})
export class OpportunityChartComponent implements OnInit {
  public chartdata: any = null;
  public gChartdata: any = null;
  public oppdata: any = null;
  public bord: any = 0;

  constructor(private http: HttpClient, private Intl: IntlService) { }

  ngOnInit(): void {
    this.getdata();

  }

  getdata() {
    this.http.get('assets/opportunity.json').subscribe((data) => {
      this.chartdata = data;
      this.gChartdata = data;
      this.loadDdl();
    });
  }
  public labelContent(e: any): string {
    if (e.value === 0 || e.value === undefined) {
      return '';
    }

    return e.value;
  }

  public visualFn(e: SeriesVisualArgs): Circle {
    const geometry = new GeomCircle([2, 2], 10);
    return new Circle(geometry);
  }
  public legendTitle: LegendTitle = {
    text: "This year's progress",
    font: "18px Arial",
    align: 'left'
  };
  public defaultItem: { name: string; value: string } = {
    name: "All",
    value: "All",
  };
  loadDdl() {
    this.oppdata = this.chartdata.series;
    // this.oppdata.unshift({
    //   name: "All",
    //   value: "All",
    // });
  }

  public valueChange(value: any): void {//toDo--> need to be find proper way to bound again!
    var _name = value.name;
    if (_name === "All") { this.getdata(); return; }
    this.http.get('assets/opportunity.json').subscribe((data) => {
      this.gChartdata = data;
      this.chartdata.series = this.gChartdata.series.filter((d: { name: any; }) => d.name === _name);
    });
  }

}


