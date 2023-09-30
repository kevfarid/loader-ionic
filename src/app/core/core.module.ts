import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from './ui/ui.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, UiModule, DirectivesModule],
  exports: [UiModule, DirectivesModule],
})
export class CoreModule {}
