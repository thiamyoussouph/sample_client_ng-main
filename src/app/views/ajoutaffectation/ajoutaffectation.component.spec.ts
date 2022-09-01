import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutaffectationComponent } from './ajoutaffectation.component';

describe('AjoutaffectationComponent', () => {
  let component: AjoutaffectationComponent;
  let fixture: ComponentFixture<AjoutaffectationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutaffectationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutaffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
