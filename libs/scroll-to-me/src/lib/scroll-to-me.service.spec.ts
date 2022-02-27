import { ElementRef } from '@angular/core';
import { ScrollToMeService } from './scroll-to-me.service';

describe('Test ScrollToMeService', () => {
  let service: ScrollToMeService;
  beforeEach(() => {
    service = new ScrollToMeService();
  });

  it('get element', () => {
    const TEST_KEY = 'key1';
    const TEST_ELEMENT_REF = {} as ElementRef;
    service.add(TEST_KEY, TEST_ELEMENT_REF);

    expect(service.get(TEST_KEY)).toBe(TEST_ELEMENT_REF);
  });

  it('add element', () => {
    const TEST_KEY = 'key1';
    const TEST_ELEMENT_REF = {} as ElementRef;
    service.add(TEST_KEY, TEST_ELEMENT_REF);

    expect(service.get(TEST_KEY)).toBe(TEST_ELEMENT_REF);
  });

  it('remove element', () => {
    const TEST_KEY = 'key1';
    const TEST_ELEMENT_REF = {} as ElementRef;
    service.add(TEST_KEY, TEST_ELEMENT_REF);

    service.remove(TEST_KEY);

    expect(service.get(TEST_KEY)).toBeUndefined();
  });
});
