import { Component, OnInit } from "@angular/core";
import { TestService } from "./test.service";

@Component({
  selector: "test",
  standalone: true,
  template: `<h1>Test</h1>`,
})
export class TestComponent implements OnInit {
  constructor(private service: TestService) {}

  ngOnInit() {
    this.service.log();
  }
}
