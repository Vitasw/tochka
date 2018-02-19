import {Component, OnInit} from '@angular/core';
import {EVENTS} from '../mock-data';
import {Event} from '../event';
import {EventType} from '../event-type.enum';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

    events: Event[] = EVENTS;

    selectedTypeFilter: string;

    filterEvents = Object.keys(EventType);

    constructor() {
    }

    ngOnInit() {
    }

    selectEventType(eventType) {
        this.selectedTypeFilter = eventType;
        this.events.sort((a,b) => {
            if (a.type === this.selectedTypeFilter) {
                return 1;
            }
        });
    }

}
