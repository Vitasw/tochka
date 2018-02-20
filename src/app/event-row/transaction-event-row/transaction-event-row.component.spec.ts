import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionEventRowComponent } from './transaction-event-row.component';

describe('TransactionEventRowComponent', () => {
  let component: TransactionEventRowComponent;
  let fixture: ComponentFixture<TransactionEventRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionEventRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionEventRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
