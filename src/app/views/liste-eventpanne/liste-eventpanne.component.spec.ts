import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEventpanneComponent } from './liste-eventpanne.component';

describe('ListeEventpanneComponent', () => {
  let component: ListeEventpanneComponent;
  let fixture: ComponentFixture<ListeEventpanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEventpanneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEventpanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
