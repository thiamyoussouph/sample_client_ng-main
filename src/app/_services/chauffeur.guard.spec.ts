import { TestBed } from '@angular/core/testing';

import { ChauffeurGuard } from './chauffeur.guard';

describe('ChauffeurGuard', () => {
  let guard: ChauffeurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChauffeurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
