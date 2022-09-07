import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireEventSComponent } from './formulaire-event-s.component';

describe('FormulaireEventSComponent', () => {
  let component: FormulaireEventSComponent;
  let fixture: ComponentFixture<FormulaireEventSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireEventSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireEventSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
