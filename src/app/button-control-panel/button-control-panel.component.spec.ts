import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonControlPanelComponent } from './button-control-panel.component';

describe('ButtonControlPanelComponent', () => {
  let component: ButtonControlPanelComponent;
  let fixture: ComponentFixture<ButtonControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonControlPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
