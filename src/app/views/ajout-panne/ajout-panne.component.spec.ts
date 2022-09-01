import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPanneComponent } from './ajout-panne.component';

describe('AjoutPanneComponent', () => {
  let component: AjoutPanneComponent;
  let fixture: ComponentFixture<AjoutPanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPanneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
