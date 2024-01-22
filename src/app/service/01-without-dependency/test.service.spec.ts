import { TestService } from './test.service';
import { TestBed } from '@angular/core/testing';

/**
 * There's two strategies to test a service that have no dependency:
 * 1. using TestBed
 * 2. as a TS Class
 */

describe('Service Without Dependency (Using TestBed)', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Service Without Dependency (As a TS Class)', () => {
  let service: TestService;

  beforeEach(() => {
    service = new TestService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});