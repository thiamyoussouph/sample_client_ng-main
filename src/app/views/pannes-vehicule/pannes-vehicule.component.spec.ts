import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannesVehiculeComponent } from './pannes-vehicule.component';

describe('PannesVehiculeComponent', () => {
  let component: PannesVehiculeComponent;
  let fixture: ComponentFixture<PannesVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PannesVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PannesVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
