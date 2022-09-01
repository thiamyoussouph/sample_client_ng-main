import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormilaireTypespanneComponent } from './formilaire-typespanne.component';

describe('FormilaireTypespanneComponent', () => {
  let component: FormilaireTypespanneComponent;
  let fixture: ComponentFixture<FormilaireTypespanneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormilaireTypespanneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormilaireTypespanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
