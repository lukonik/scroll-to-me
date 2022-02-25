import { ScrollToMeContainerDirective } from './scroll-to-me-container.directive';
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollToMeInitiator]',
})
export class ScrollToMeInitiatorDirective {
  @Input('scrollToMeInitiator')
  key!: string;

  @Input()
  disabled: boolean | undefined;

  @HostListener('click')
  onClick() {
    if (this.disabled) {
      return;
    }

    this.scrollToMeContainer.scrollTo(this.key);
  }

  constructor(private scrollToMeContainer: ScrollToMeContainerDirective) {}
}
