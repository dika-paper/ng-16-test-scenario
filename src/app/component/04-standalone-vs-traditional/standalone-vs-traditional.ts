import { Component, Injectable, NgModule } from "@angular/core";

@Injectable()
export class StoreService {
  private _data = "halo";

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }
}

// -------------------------------------
// STANDALONE COMPONENT
// -------------------------------------

@Component({
  standalone: true,
  selector: "standalone",
  providers: [StoreService],
  template: `
    <h1>Standalone vs Traditional</h1>
    <p>{{ store.data }}</p>
  `,
})
export class StandaloneComponent {
  constructor(public store: StoreService) {}
}

// -------------------------------------
// TRADITIONAL COMPONENT
// -------------------------------------

@Component({
  selector: "traditional",
  template: `
    <h1>Standalone vs Traditional</h1>
    <p>{{ store.data }}</p>
  `,
})
export class TraditionalComponent {
  constructor(public store: StoreService) {}
}

@NgModule({
  declarations: [TraditionalComponent],
  providers: [StoreService],
})
export class StandaloneVsTraditionalModule {}
