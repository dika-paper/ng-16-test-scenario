import { Injectable } from "@angular/core";

@Injectable()
export class TestService {
  constructor() {}

  foo() {
    return "foo";
  }

  bar() {
    return "bar";
  }
}
