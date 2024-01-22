import { TestBed } from "@angular/core/testing";
import { ParentComponent } from "./parent.component";
import { Component } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-child",
})
class ChildComponentStub {}

describe("Component That Has a Child", () => {
  let parentComponent: ParentComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParentComponent, ChildComponentStub],
    });

    parentComponent = TestBed.createComponent(ParentComponent).componentInstance;
  });

  it("should be created", () => {
    expect(parentComponent).toBeTruthy();
  });
});
