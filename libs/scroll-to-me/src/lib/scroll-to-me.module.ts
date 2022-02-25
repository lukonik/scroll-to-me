import { ScrollToMeDirective } from './scroll-to-me.directive';
import { ScrollToMeContainerDirective } from './scroll-to-me-container.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollToMeInitiatorDirective } from './scroll-to-me-initiator.directive';

@NgModule({
  declarations: [
    ScrollToMeContainerDirective,
    ScrollToMeDirective,
    ScrollToMeInitiatorDirective,
  ],
  imports: [CommonModule],
  exports: [
    ScrollToMeContainerDirective,
    ScrollToMeDirective,
    ScrollToMeInitiatorDirective,
  ],
})
export class ScrollToMeModule {}
