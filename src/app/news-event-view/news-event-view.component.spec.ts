import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventViewComponent } from './news-event-view.component';

describe('NewsEventViewComponent', () => {
  let component: NewsEventViewComponent;
  let fixture: ComponentFixture<NewsEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
