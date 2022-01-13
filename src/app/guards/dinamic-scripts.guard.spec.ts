import { TestBed } from '@angular/core/testing';

import { DinamicScriptsGuard } from './dinamic-scripts.guard';

describe('DinamicScriptsGuard', () => {
  let guard: DinamicScriptsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DinamicScriptsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
