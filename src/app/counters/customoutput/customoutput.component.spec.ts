import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomoutputComponent } from './customoutput.component';

describe('CustomoutputComponent', () => {
  let component: CustomoutputComponent;
  let fixture: ComponentFixture<CustomoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomoutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
