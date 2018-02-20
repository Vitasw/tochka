import {Component, Input, OnInit} from '@angular/core';
import {TransactionEvent} from '../../transaction-event';


@Component({
    selector: 'app-transaction-event-row',
    templateUrl: './transaction-event-row.component.html',
    styleUrls: ['./transaction-event-row.component.less']
})
export class TransactionEventRowComponent implements OnInit {

    @Input() event: TransactionEvent;

    constructor() { }

    ngOnInit() {
    }

}
