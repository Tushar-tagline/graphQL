import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodingspinnerComponent } from './lodingspinner.component';

describe('LodingspinnerComponent', () => {
  let component: LodingspinnerComponent;
  let fixture: ComponentFixture<LodingspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodingspinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LodingspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
