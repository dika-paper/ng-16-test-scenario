import { ComponentFixture, TestBed } from "@angular/core/testing";
import {
  StandaloneComponent,
  TraditionalComponent,
} from "./standalone-vs-traditional";
import { StoreService } from "./standalone-vs-traditional";

const TestServiceStub: Partial<StoreService> = {
  data: "mocked data",
};

describe("Standalone Component", () => {
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

      /**
       * in a standalone component, we can't directly modify the testing module
       * we can use `overrideComponent` as shown above.
       */
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneComponent);
    component = fixture.componentInstance;
    // this will get service instance from the view injector (component level)
    service = fixture.debugElement.injector.get(StoreService);

    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});

describe("Traditional Component", () => {
  let component: TraditionalComponent;
  let fixture: ComponentFixture<TraditionalComponent>;
  let service: StoreService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraditionalComponent],
      providers: [StoreService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraditionalComponent);
    component = fixture.componentInstance;
    // this will get service instance from the root injector (app level)
    service = TestBed.inject(StoreService);

    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(service).toBeTruthy();
    expect(component).toBeTruthy();
  });
});
