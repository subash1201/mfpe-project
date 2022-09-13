import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplylistComponent } from './supplylist.component';

describe('SupplylistComponent', () => {
  let component: SupplylistComponent;
  let fixture: ComponentFixture<SupplylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
