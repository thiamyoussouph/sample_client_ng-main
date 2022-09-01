import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobmaintenacesComponent } from './jobmaintenaces.component';

describe('JobmaintenacesComponent', () => {
  let component: JobmaintenacesComponent;
  let fixture: ComponentFixture<JobmaintenacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobmaintenacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobmaintenacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
