import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() timeout: number = 1000;

  private unsubscribe$ = new Subject<void>();

  currentImage: string = '';

  constructor() {}

  ngOnInit() {
    this.currentImage = this.images[0];
    this.start();
  }

  start() {
    const interval$ = interval(this.timeout);

    interval$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.changeImage());
  }

  private changeImage() {
    const index = this.images.indexOf(this.currentImage);
    if (index < this.images.length - 1) {
      this.currentImage = this.images[index + 1];
    } else {
      this.currentImage = this.images[0];
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
