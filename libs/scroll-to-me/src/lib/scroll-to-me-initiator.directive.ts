import { ScrollToMeContainerDirective } from './scroll-to-me-container.directive';
import { Directive, HostListener, Input } from '@angular/core';
import { ScrollToMeOptions } from './scroll-to-me-options';

@Directive({
  selector: '[scrollToMeInitiator]',
})
export class ScrollToMeInitiatorDirective {
  @Input('scrollToMeInitiator')
  key!: string;

  @Input()
  disabled: boolean | undefined;

  @Input()
  scrollOptions: ScrollToMeOptions | undefined;

  @HostListener('click')
  onClick() {
    if (this.disabled) {
      return;
    }

    this.scrollToMeContainer.scrollTo(this.key);
  }

  constructor(private scrollToMeContainer: ScrollToMeContainerDirective) {}
}
