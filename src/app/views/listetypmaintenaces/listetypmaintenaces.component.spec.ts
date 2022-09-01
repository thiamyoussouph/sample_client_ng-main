import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetypmaintenacesComponent } from './listetypmaintenaces.component';

describe('ListetypmaintenacesComponent', () => {
  let component: ListetypmaintenacesComponent;
  let fixture: ComponentFixture<ListetypmaintenacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListetypmaintenacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListetypmaintenacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
