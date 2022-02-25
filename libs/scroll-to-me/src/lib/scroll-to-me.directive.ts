import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { ScrollToMeService } from './scroll-to-me.service';

@Directive({
  selector: '[scrollToMe]',
})
export class ScrollToMeDirective implements OnChanges, OnDestroy {
  @Input('scrollToMe')
  key!: string | number;

  constructor(
    private scrollToMeService: ScrollToMeService,
    private el: ElementRef<HTMLElement>
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key'].firstChange) {
      this.scrollToMeService.add(this.key, this.el);
    } else {
      this.scrollToMeService.remove(changes['key'].previousValue);
      this.scrollToMeService.add(changes['key'].currentValue, this.el);
    }
  }

  ngOnDestroy(): void {
    this.scrollToMeService.remove(this.key);
  }
}
