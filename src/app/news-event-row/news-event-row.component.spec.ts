import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventRowComponent } from './news-event-row.component';

describe('NewsEventRowComponent', () => {
  let component: NewsEventRowComponent;
  let fixture: ComponentFixture<NewsEventRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEventRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsEventRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
