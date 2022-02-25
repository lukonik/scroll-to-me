import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollContainerPageComponent } from './scroll-container-page.component';

describe('ScrollContainerPageComponent', () => {
  let component: ScrollContainerPageComponent;
  let fixture: ComponentFixture<ScrollContainerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollContainerPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollContainerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
