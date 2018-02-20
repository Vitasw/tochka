import {Component, OnInit} from '@angular/core';
import {EVENTS} from '../mock-data';
import {Event} from '../event';
import {EventType} from '../event-type.enum';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.less']
})
export class EventListComponent implements OnInit {

    events: Event[] = EVENTS;

    sortField = 'date';
    sortDirection = false;

    constructor() {
    }

    ngOnInit() {
    }

    setSortField(type: string) {
        if (this.sortField === type) {
            this.sortDirection = !this.sortDirection;
        } else {
            this.sortDirection = false;
            this.sortField = type;
        }
        this.sortEvents();
    }

    sortEvents() {
        this.events.sort((a: Event, b: Event) => {
            let result: number;
            if (a[this.sortField] > b[this.sortField]) {
                result = 1;
            } else if (a[this.sortField] < b[this.sortField]) {
                result = -1;
            } else {
                result = 0;
            }

            if (this.sortDirection) {
                result = result * (-1);
            }
            return result;
        });
    }

}
