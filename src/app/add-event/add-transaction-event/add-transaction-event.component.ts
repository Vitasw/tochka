import {Component, OnInit} from '@angular/core';
import {TransactionEvent} from '../../transaction-event';
import * as moment from 'moment';
import {EventService} from '../../event.service';
import {Router} from '@angular/router';
import {EventType} from '../../event-type.enum';

@Component({
    selector: 'app-add-transaction-event',
    templateUrl: './add-transaction-event.component.html',
    styleUrls: ['./add-transaction-event.component.less']
})
export class AddTransactionEventComponent implements OnInit {

    event: TransactionEvent;
    formatDate: string;

    constructor(private eventService: EventService,
                private router: Router) {
        this.event = new TransactionEvent();
        this.event.type = EventType.TRANSACTION;
        this.event.date = moment().valueOf();
        this.formatDate = moment(this.event.date).format('YYYY-MM-DDTHH:mm:ss');
    }

    ngOnInit() {
    }

    add(): void {
        this.event.amount = +this.event.amount;
        if (this.event.amount === 0) {
            return;
        }

        this.event.from = this.event.from.trim();
        if (!this.event.from.length) {
            return;
        }

        this.event.description = this.event.description.trim();
        if (!this.event.description.length) {
            return;
        }


        this.event.date = moment(this.formatDate).valueOf();
        this.eventService
            .addEvent(this.event)
            .subscribe(status => {
                if (status) {
                    this.router.navigate(['events']);
                }
            });
    }

}
