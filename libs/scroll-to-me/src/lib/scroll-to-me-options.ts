import { InjectionToken } from '@angular/core';

export const SCROLL_TO_ME_OPTIONS = new InjectionToken<ScrollToMeOptions>(
  'SCROLL_TO_ME_OPTIONS'
);

export interface ScrollToMeOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}
