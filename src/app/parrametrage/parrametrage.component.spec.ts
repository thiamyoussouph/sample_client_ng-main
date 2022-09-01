import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParrametrageComponent } from './parrametrage.component';

describe('ParrametrageComponent', () => {
  let component: ParrametrageComponent;
  let fixture: ComponentFixture<ParrametrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParrametrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParrametrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
