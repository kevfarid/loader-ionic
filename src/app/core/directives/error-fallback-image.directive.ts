import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appErrorFallbackImage]',
})
export class ErrorFallbackImageDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('error') onError() {
    const fallbackImageUrl = '/assets/no-image.png';
    this.renderer.setAttribute(this.el.nativeElement, 'src', fallbackImageUrl);
  }
}
