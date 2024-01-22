import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  avg(xs: number[]): number {
    if (!Array.isArray(xs)) return 0;
    if (xs.length === 0) return 0;

    const sum = this.sum(xs);
    const avg = sum / xs.length;

    return avg;
  }

  sum(xs: number[]): number {
    if (!Array.isArray(xs)) return 0;

    let sum = 0;

    for (let i = 0; i < xs.length; i++) {
      sum = sum + xs[i];
    }

    return sum;
  }
}
