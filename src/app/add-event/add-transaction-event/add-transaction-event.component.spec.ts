import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransactionEventComponent } from './add-transaction-event.component';

describe('AddTransactionEventComponent', () => {
  let component: AddTransactionEventComponent;
  let fixture: ComponentFixture<AddTransactionEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTransactionEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTransactionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
