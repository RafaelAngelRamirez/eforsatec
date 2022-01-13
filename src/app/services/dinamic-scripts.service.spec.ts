import { TestBed } from '@angular/core/testing';

import { DinamicScriptsService } from './dinamic-scripts.service';

describe('DinamicScriptsService', () => {
  let service: DinamicScriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinamicScriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
