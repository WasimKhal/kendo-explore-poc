import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityChartComponent } from './opportunity-chart.component';

describe('OpportunityChartComponent', () => {
  let component: OpportunityChartComponent;
  let fixture: ComponentFixture<OpportunityChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpportunityChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
