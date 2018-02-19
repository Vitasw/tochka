import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../event';

@Component({
    selector: 'app-transaction-event-row',
    templateUrl: './transaction-event-row.component.html',
    styleUrls: ['./transaction-event-row.component.css']
})
export class TransactionEventRowComponent implements OnInit {

    @Input() event: Event;

    constructor() { }

    ngOnInit() {
    }

}
