import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVeculeComponent } from './formulaire-vecule.component';

describe('FormulaireVeculeComponent', () => {
  let component: FormulaireVeculeComponent;
  let fixture: ComponentFixture<FormulaireVeculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireVeculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireVeculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
