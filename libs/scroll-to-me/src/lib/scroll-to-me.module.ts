import { ScrollToMeDirective } from './scroll-to-me.directive';
import { ScrollToMeContainerDirective } from './scroll-to-me-container.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [ScrollToMeContainerDirective, ScrollToMeDirective],
  imports: [CommonModule],
  exports: [ScrollToMeContainerDirective, ScrollToMeDirective],
})
export class ScrollToMeModule {}
