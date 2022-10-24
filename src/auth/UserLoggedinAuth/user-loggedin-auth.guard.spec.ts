import { TestBed } from '@angular/core/testing';

import { UserLoggedinAuthGuard } from './user-loggedin-auth.guard';

describe('UserLoggedinAuthGuard', () => {
  let guard: UserLoggedinAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLoggedinAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
