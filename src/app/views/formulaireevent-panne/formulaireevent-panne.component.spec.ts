import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireeventPanneComponent } from './formulaireevent-panne.component';

describe('FormulaireeventPanneComponent', () => {
  let component: FormulaireeventPanneComponent;
  let fixture: ComponentFixture<FormulaireeventPanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireeventPanneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireeventPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
