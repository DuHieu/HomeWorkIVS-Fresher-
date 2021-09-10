import { TestBed } from '@angular/core/testing';

import { dvh_HeroService } from './hero.service';

describe('HeroService', () => {
  let service: dvh_HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(dvh_HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
