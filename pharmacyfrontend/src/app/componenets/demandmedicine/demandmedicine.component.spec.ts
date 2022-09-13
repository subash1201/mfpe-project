import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandmedicineComponent } from './demandmedicine.component';

describe('DemandmedicineComponent', () => {
  let component: DemandmedicineComponent;
  let fixture: ComponentFixture<DemandmedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandmedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
