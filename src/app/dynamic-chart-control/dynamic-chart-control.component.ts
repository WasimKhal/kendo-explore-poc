import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesClickEvent } from "@progress/kendo-angular-charts";
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';


@Component({
  selector: 'dynamic-chart-control',
  templateUrl: './dynamic-chart-control.component.html',
  styleUrls: ['./dynamic-chart-control.component.css']
})
export class DynamicChartControlComponent implements OnInit {
  public pieData: any = null;
  public isDrillDownEnabled = false;
  public title = "First Level";
  public level: any = 1;

  constructor(private http: HttpClient, private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);

  }

  ngOnInit(): void {
    this.getData();
    this.title = "Level " + this.level;
  }
  getData() {
    this.http.get('assets/db.json').subscribe((data) => {
      this.pieData = data;
    });
  }
  public labelContent(args: LegendLabelsContentArgs): string {
    return `${args.dataItem.field}
            Revenue :$ ${args.value}`;
  }
  public seriesClick(e: SeriesClickEvent): void {


    if (e.category === "Jan" || e.category === "2022") {
      this.level++;
      this.setDrilldownData();

      this.title = "Level " + this.level;
    }
  }

  public loadOrignalData(): void {
    this.level--;
    this.setDrilldownData();
    //this.isDrillDownEnabled = false;
    //this.title = "First level";

    this.title = "Level " + this.level;
  }

  public setDrilldownData() {
    this.isDrillDownEnabled = true;
    const newDataSecondLevel = {
      "pieData": [
        { "id": 1, "field": "Jan", "revenue": 25 },
        { "id": 2, "field": "Feb", "revenue": 50 },
        { "id": 3, "field": "Mar", "revenue": 40 },
        { "id": 4, "field": "April", "revenue": 3 },
      ]
    }

    const newDataThirdLevel = {
      "pieData": [
        { "id": 1, "field": "Week 1", "revenue": 70 },
        { "id": 2, "field": "Week 2", "revenue": 65 },
        { "id": 3, "field": "Week 3", "revenue": 25 },
        { "id": 4, "field": "Week 4", "revenue": 35 },
      ]
    }
    if (this.level === 2) {
      this.pieData = newDataSecondLevel;
    }
    else if (this.level === 3)
      this.pieData = newDataThirdLevel;
    else {
      this.getData();
      this.isDrillDownEnabled = false;
    }
  }
}
