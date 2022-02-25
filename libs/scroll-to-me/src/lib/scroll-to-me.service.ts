import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollToMeService {
  _scrollToMes: Record<string | number, ElementRef<HTMLElement>> = {};

  add(key: string | number, el: ElementRef<HTMLElement>) {
    if (this._scrollToMes[key]) {
      return;
    }
    this._scrollToMes[key] = el;
  }

  get(key: string | number) {
    return this._scrollToMes[key];
  }

  remove(key: string | number) {
    delete this._scrollToMes[key];
  }
}
