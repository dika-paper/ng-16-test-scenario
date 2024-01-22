import { Component } from "@angular/core";
import { ChildComponent } from "./child.component";

@Component({
  standalone: true,
  selector: "app-parent",
  imports: [ChildComponent],
  template: `
    <h1>Parent</h1>
    <app-child></app-child>
  `,
})
export class ParentComponent {}
