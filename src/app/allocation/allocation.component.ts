import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { LegendItemVisualArgs, LegendTitle, SeriesVisualArgs } from '@progress/kendo-angular-charts';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl'
import { align, Circle, Group, Layout, Rect } from '@progress/kendo-drawing';
import { Circle as GeomCircle } from '@progress/kendo-drawing/geometry';


@Component({
  selector: 'allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.css']
})
export class AllocationComponent implements OnInit {
  public chartdata: any = null;
  public chartdata2: any = null;
  constructor(private http: HttpClient, private Intl: IntlService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.http.get('assets/allocationmanger.json').subscribe((data) => {
      this.chartdata = data;
    });
    this.http.get('assets/allocationpartner.json').subscribe((data) => {
      this.chartdata2 = data;
    });
  }
  public labelContent(e: any): string {
    if (e.value === 0 || e.value === undefined) {
      return '';
    }

    return e.value;
  }

}
