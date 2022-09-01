import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCreeUserComponent } from './formulaire-cree-user.component';

describe('FormulaireCreeUserComponent', () => {
  let component: FormulaireCreeUserComponent;
  let fixture: ComponentFixture<FormulaireCreeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCreeUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCreeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
