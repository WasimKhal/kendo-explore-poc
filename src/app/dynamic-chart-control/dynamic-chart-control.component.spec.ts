import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicChartControlComponent } from './dynamic-chart-control.component';

describe('DynamicChartControlComponent', () => {
  let component: DynamicChartControlComponent;
  let fixture: ComponentFixture<DynamicChartControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicChartControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicChartControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
