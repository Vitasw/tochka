import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionEvent } from '../../transaction-event';
import { EventService } from '../../event.service';

@Component({
    selector: 'app-transaction-event-view',
    templateUrl: './transaction-event-view.component.html',
    styleUrls: ['./transaction-event-view.component.less']
})
export class TransactionEventViewComponent implements OnInit {

    @Input() event: TransactionEvent;

    constructor(
        private eventService: EventService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    remove() {
        this.eventService
            .removeTransaction(this.event.id)
            .subscribe(status => {
                if (status) {
                    this.router.navigate(['events']);
                }
            });
    }

}
