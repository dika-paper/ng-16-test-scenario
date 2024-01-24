import { Component, OnDestroy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, throwError } from "rxjs";

@Injectable()
export class TestService {
  private _string$ = new BehaviorSubject<string>("initial string");
  string$ = this._string$.asObservable();

  private _number$ = new BehaviorSubject<number>(0);
  number$ = this._number$.asObservable();
}

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-test",
  providers: [TestService],
  template: `
    <h1>Test Component</h1>
    <p data-testid="test">{{ string$ | async }}</p>
  `,
})
export class TestComponent implements OnDestroy {
  string$ = this.testService.string$;
  number = 0;
  error$ = throwError(new Error("Test Error"));

  destroyed$ = new Subject<void>();

  constructor(private testService: TestService) {
    this.testService.number$.subscribe((number) => {
      this.number = number;
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
