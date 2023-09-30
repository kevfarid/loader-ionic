import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { IonicModule } from '@ionic/angular';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, IonicModule, DirectivesModule],
  exports: [LoaderComponent],
})
export class UiModule {}
