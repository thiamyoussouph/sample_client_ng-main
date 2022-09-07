import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisJOBmaintenanceEventComponent } from './lis-jobmaintenance-event.component';

describe('LisJOBmaintenanceEventComponent', () => {
  let component: LisJOBmaintenanceEventComponent;
  let fixture: ComponentFixture<LisJOBmaintenanceEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisJOBmaintenanceEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisJOBmaintenanceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
