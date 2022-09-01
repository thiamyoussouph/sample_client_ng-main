import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireKilometrageComponent } from './formulaire-kilometrage.component';

describe('FormulaireKilometrageComponent', () => {
  let component: FormulaireKilometrageComponent;
  let fixture: ComponentFixture<FormulaireKilometrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireKilometrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireKilometrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
