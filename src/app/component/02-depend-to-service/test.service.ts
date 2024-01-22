import { Injectable } from "@angular/core";

@Injectable()
export class TestService {
  constructor() {}

  log() {
    console.log("test");
  }

  bar() {
    console.log("bar");
  }
}
