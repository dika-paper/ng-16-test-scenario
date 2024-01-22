import { TestService } from './test.service';
import { TestBed } from '@angular/core/testing';

describe('TestService', () => {
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

  describe('avg', () => {
    it('should return 0 when the input is an empty array', () => {
      const input: number[] = [];

      const actual = service.avg(input);

      expect(actual).toBe(0);
    });

    it('should return 0 when the input is not an array', () => {
      const input = null;

      // @ts-ignore
      const actual = service.avg(input);

      expect(actual).toBe(0);
    });

    it('should return the average of the input array', () => {
      const input = [1, 2, 3];

      const actual = service.avg(input);

      expect(actual).toBe(2);
    });
  });

  describe('sum', () => {
    it('should return 0 when the input is an empty array', () => {
      const input: number[] = [];

      const actual = service.sum(input);

      expect(actual).toBe(0);
    });

    it('should return 0 when the input is not an array', () => {
      const input = null;

      // @ts-ignore
      const actual = service.sum(input);

      expect(actual).toBe(0);
    });

    it('should return the sum of the input array', () => {
      const input = [1, 2, 3];

      const actual = service.sum(input);

      expect(actual).toBe(6);
    });
  });
});
