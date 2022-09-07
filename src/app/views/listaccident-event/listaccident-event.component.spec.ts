import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaccidentEventComponent } from './listaccident-event.component';

describe('ListaccidentEventComponent', () => {
  let component: ListaccidentEventComponent;
  let fixture: ComponentFixture<ListaccidentEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaccidentEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaccidentEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
