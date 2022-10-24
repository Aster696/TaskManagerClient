import { TestBed } from '@angular/core/testing';

import { EmailControllerService } from './email-controller.service';

describe('EmailControllerService', () => {
  let service: EmailControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
