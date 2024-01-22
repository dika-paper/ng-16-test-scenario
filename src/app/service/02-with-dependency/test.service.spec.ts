import { TestService } from "./test.service";
import { OtherService } from "./other.service";
import { TestBed } from "@angular/core/testing";

describe("Service With Dependency (With TestBed)", () => {
  let service: TestService;
  let otherService: OtherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService, OtherService],
    });
    service = TestBed.inject(TestService);
    otherService = TestBed.inject(OtherService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should log the result of OtherService.foo", () => {
    jest.spyOn(otherService, "foo").mockReturnValueOnce("bar");
    jest.spyOn(console, "log").mockImplementationOnce(() => {});

    service.log();

    expect(console.log).toHaveBeenCalledWith("bar");
  });
});

describe("Service With Dependency (As a TS Class)", () => {
  let service: TestService;
  let otherService: OtherService;

  beforeEach(() => {
    otherService = new OtherService();
    service = new TestService(otherService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should log the result of OtherService.foo", () => {
    jest.spyOn(otherService, "foo").mockReturnValueOnce("bar");
    jest.spyOn(console, "log").mockImplementationOnce(() => {});

    service.log();

    expect(console.log).toHaveBeenCalledWith("bar");
  });
});
