import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeriesClickEvent } from "@progress/kendo-angular-charts";
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {
  public pieData: any = null;
  public isDrillDownEnabled = false;
  public title = "Chart Title";
  public level: any = 1;

  constructor(private http: HttpClient, private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
    this.title = "Level " + this.level;
  }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.http.get('assets/db2.json').subscribe((data) => {
      this.pieData = data;
    });
  }
  public labelContent(args: LegendLabelsContentArgs): string {
    return ` ${args.dataItem.field}
            Revenue: $ ${args.value}`;
  }
  public seriesClick(e: SeriesClickEvent): void {
    if (e.category === "Jan" || e.category === "2022") {
      this.level++;
      this.setDrilldownData();
      this.title = "Level " + this.level;
    }
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
  public goback(): void {
    this.level--;
    this.setDrilldownData();
    this.title = "Level " + this.level;
  }

}
