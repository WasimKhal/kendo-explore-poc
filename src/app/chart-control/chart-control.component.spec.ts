import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartControlComponent } from './chart-control.component';

describe('ChartControlComponent', () => {
  let component: ChartControlComponent;
  let fixture: ComponentFixture<ChartControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
