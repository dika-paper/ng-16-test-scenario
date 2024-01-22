import { TestBed } from "@angular/core/testing";
import { TestService } from "./test.service";

describe("Spying Function In a Service", () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
    });
    service = TestBed.inject(TestService);
  });

  describe("avg", () => {
    it("should return 0 when the input is an empty array", () => {
      const actual = service.avg([]);

      expect(actual).toBe(0);
    });

    it("should return 0 when the input is not an array", () => {
      // @ts-ignore
      const actual = service.avg(null);

      expect(actual).toBe(0);
    });

    it("should return the average of the input array", () => {
      const actual = service.avg([1, 2, 3]);

      expect(actual).toBe(2);
    });
  });

  describe("sum", () => {
    it("should return 0 when the input is an empty array", () => {
      const actual = service.sum([]);

      expect(actual).toBe(0);
    });

    it("should return 0 when the input is not an array", () => {
      // @ts-ignore
      const actual = service.sum(null);

      expect(actual).toBe(0);
    });

    it("should return the sum of the input array", () => {
      const actual = service.sum([1, 2, 3]);

      expect(actual).toBe(6);
    });
  });
});
