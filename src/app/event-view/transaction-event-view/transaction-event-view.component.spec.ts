import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEventViewComponent } from './transaction-event-view.component';

describe('TransactionEventViewComponent', () => {
  let component: TransactionEventViewComponent;
  let fixture: ComponentFixture<TransactionEventViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionEventViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
