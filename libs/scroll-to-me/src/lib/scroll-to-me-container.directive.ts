import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, Input, Optional } from '@angular/core';
import {
  ScrollToMeOptions,
  SCROLL_TO_ME_OPTIONS,
} from './scroll-to-me-options';
import { ScrollToMeService } from './scroll-to-me.service';

@Directive({
  selector: '[scrollToMeContainer]',
  providers: [ScrollToMeService],
  exportAs: 'scrollToMeContainer',
})
export class ScrollToMeContainerDirective {
  @Input()
  root = false;

  @Input()
  options: ScrollToMeOptions | undefined;

  constructor(
    private scrollToMeService: ScrollToMeService,
    private el: ElementRef<HTMLElement>,
    @Inject(DOCUMENT) private document: Document,
    @Optional() @Inject(SCROLL_TO_ME_OPTIONS) private config: ScrollToMeOptions
  ) {}

  scrollTo(key: string) {
    const el = this.scrollToMeService.get(key);

    const behavior =
      this.options?.behavior || this.config?.behavior || 'smooth';

    if (el) {
      const container = (
        this.root ? this.document.scrollingElement : this.el.nativeElement
      ) as HTMLElement;

      if (!container) {
        return;
      }

      container.scroll({
        behavior: behavior,
        top:
          el.nativeElement.offsetTop -
          container.offsetTop -
          (this.options?.offset || this.config?.offset || 0),
      });
    }
  }
}
