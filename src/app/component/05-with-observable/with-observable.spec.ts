import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StandaloneComponent } from "./with-observable";
import { StoreService } from "./with-observable";
import { BehaviorSubject, of, takeUntil } from "rxjs";
import { expectText } from "@paper-fe/armstrong/dom";

const TestServiceStub: Partial<StoreService> = {
  string$: of("Test Data Mock"),
  number$: of(0),
};

describe("Standalone Component with Observable", () => {
  let component: StandaloneComponent;
  let fixture: ComponentFixture<StandaloneComponent>;
  let service: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneComponent],
    })
      .overrideComponent(StandaloneComponent, {
        set: {
          providers: [{ provide: StoreService, useValue: TestServiceStub }],
        },
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    service = fixture.debugElement.injector.get(StoreService);

    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  describe("Consuming BehaviorSubject with AsyncPipe", () => {
    it("should display the initial data from the StoreService", () => {
      fixture.whenStable().then(() => {
        expectText(fixture, "test", "Test Data Mock");
      });
    });

    it("should display updated observable value", () => {
      service.string$ = of("New Data");
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expectText(fixture, "test", "New Data");
      });
    });
  });

  describe("Consuming BehaviorSubject with Subscription", () => {
    it("should display the initial data from the StoreService", () => {
      fixture.whenStable().then(() => {
        expect(component.number).toBe(0);
      });
    });

    it("should display updated observable value", () => {
      service.number$ = of(2);
      fixture.detectChanges();

      fixture.whenStable().then(() => {
        expect(component.number).toBe(2);
      });
    });
  });

  describe("Unsubsription", () => {
    it("should unsubscribe from the observable", () => {
      const subscription = new BehaviorSubject<string>("value")
        .asObservable()
        .pipe(takeUntil(component.destroyed$))
        .subscribe();

      component.ngOnDestroy();

      expect(subscription.closed).toBe(true);
    });

    it("should complete", (done) => {
      new BehaviorSubject<string>("value")
        .asObservable()
        .pipe(takeUntil(component.destroyed$))
        .subscribe({
          error: () => {
            fail("should not error");
          },
          complete: () => {
            done();
          },
        });

      component.ngOnDestroy();
    });
  });

  describe("Error Handling", () => {
    it("should display the error", () => {
      component.error$.subscribe({
        next: () => {
          fail("should not emit");
        },
        error: (error) => {
          expect(error.message).toBe("Test Error");
        },
        complete: () => {
          fail("should not complete");
        },
      });
    });
  });
});
