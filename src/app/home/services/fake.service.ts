import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeService {
  constructor() {}

  getData({ timeout = 3000 }: { timeout?: number }) {
    return new Observable((observer) => {
      setTimeout(() => {
        observer.next('Fake response');
        observer.complete();
      }, timeout);
    });
  }
}
