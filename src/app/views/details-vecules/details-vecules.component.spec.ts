import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVeculesComponent } from './details-vecules.component';

describe('DetailsVeculesComponent', () => {
  let component: DetailsVeculesComponent;
  let fixture: ComponentFixture<DetailsVeculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsVeculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsVeculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
