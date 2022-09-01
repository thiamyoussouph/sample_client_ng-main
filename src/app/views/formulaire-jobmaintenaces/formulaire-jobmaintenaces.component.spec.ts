import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireJobmaintenacesComponent } from './formulaire-jobmaintenaces.component';

describe('FormulaireJobmaintenacesComponent', () => {
  let component: FormulaireJobmaintenacesComponent;
  let fixture: ComponentFixture<FormulaireJobmaintenacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireJobmaintenacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireJobmaintenacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
