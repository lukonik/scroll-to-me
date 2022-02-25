import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollRootPageComponent } from './scroll-root-page.component';

describe('ScrollRootPageComponent', () => {
  let component: ScrollRootPageComponent;
  let fixture: ComponentFixture<ScrollRootPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollRootPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollRootPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
