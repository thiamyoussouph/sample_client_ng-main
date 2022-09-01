import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KilometrageComponent } from './kilometrage.component';

describe('KilometrageComponent', () => {
  let component: KilometrageComponent;
  let fixture: ComponentFixture<KilometrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KilometrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KilometrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
