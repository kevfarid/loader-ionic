import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorFallbackImageDirective } from './error-fallback-image.directive';

@NgModule({
  declarations: [ErrorFallbackImageDirective],
  imports: [CommonModule],
  exports: [ErrorFallbackImageDirective],
})
export class DirectivesModule {}
