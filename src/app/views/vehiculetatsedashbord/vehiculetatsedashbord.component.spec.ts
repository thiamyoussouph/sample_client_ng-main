import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculetatsedashbordComponent } from './vehiculetatsedashbord.component';

describe('VehiculetatsedashbordComponent', () => {
  let component: VehiculetatsedashbordComponent;
  let fixture: ComponentFixture<VehiculetatsedashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculetatsedashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculetatsedashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
