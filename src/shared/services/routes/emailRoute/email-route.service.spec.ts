import { TestBed } from '@angular/core/testing';

import { EmailRouteService } from './email-route.service';

describe('EmailRouteService', () => {
  let service: EmailRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
