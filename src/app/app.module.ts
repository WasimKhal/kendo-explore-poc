import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { ChartsModule } from "@progress/kendo-angular-charts";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { FormsModule } from "@angular/forms";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { HttpClientModule } from "@angular/common/http";

import 'hammerjs';
import { ChartControlComponent } from './chart-control/chart-control.component';
import { DynamicChartControlComponent } from './dynamic-chart-control/dynamic-chart-control.component';
import { ChartTableComponent } from './chart-table/chart-table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { OpportunityChartComponent } from './opportunity-chart/opportunity-chart.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AllocationComponent } from './allocation/allocation.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    ChartControlComponent,
    DynamicChartControlComponent,
    ChartTableComponent,
    OpportunityChartComponent,
    AllocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    LayoutModule,
    GridModule,
    InputsModule,
    DropDownsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
