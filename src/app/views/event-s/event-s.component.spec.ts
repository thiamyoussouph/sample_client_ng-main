import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSComponent } from './event-s.component';

describe('EventSComponent', () => {
  let component: EventSComponent;
  let fixture: ComponentFixture<EventSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
