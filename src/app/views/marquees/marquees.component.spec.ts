import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueesComponent } from './marquees.component';

describe('MarqueesComponent', () => {
  let component: MarqueesComponent;
  let fixture: ComponentFixture<MarqueesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
