import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ui-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() images: string[] = [];
  @Input() isLoading: boolean = true;

  @Output() finished: EventEmitter<boolean> = new EventEmitter<boolean>();

  readonly TIMEOUT_CHANGE_IMAGE = 1000;
  private unsubscribe$ = new Subject<void>();

  currentImage: string = '';

  constructor() {}

  ngOnInit() {
    this.currentImage = this.images[0];
    this.start();
  }

  start() {
    const interval$ = interval(this.TIMEOUT_CHANGE_IMAGE);

    interval$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.nextImage());
  }

  finish() {
    this.finished.emit(true);
  }

  nextImage() {
    const index = this.images.indexOf(this.currentImage);
    if (index < this.images.length - 1) {
      this.currentImage = this.images[index + 1];
    } else {
      this.currentImage = this.images[0];
    }
  }

  prevImage() {
    const index = this.images.indexOf(this.currentImage);
    if (index > 0) {
      this.currentImage = this.images[index - 1];
    } else {
      this.currentImage = this.images[this.images.length - 1];
    }
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
