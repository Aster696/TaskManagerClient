import { TestBed } from '@angular/core/testing';

import { TaskRouteService } from './task-route.service';

describe('TaskRouteService', () => {
  let service: TaskRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
