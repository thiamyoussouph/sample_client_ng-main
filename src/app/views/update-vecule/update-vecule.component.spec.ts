import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVeculeComponent } from './update-vecule.component';

describe('UpdateVeculeComponent', () => {
  let component: UpdateVeculeComponent;
  let fixture: ComponentFixture<UpdateVeculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVeculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVeculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
