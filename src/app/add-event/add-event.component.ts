import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../event';
import { EventType } from '../event-type.enum';
import { EventService } from '../event.service';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.less']
})
export class AddEventComponent implements OnInit {

    event: Event;

    eventTypes: Array<string>;

    selectedEventType: string = EventType.NEWS;

    constructor(
        private eventService: EventService,
        private router: Router,
    ) {
        this.eventTypes = Object.keys(Object.assign({}, EventType));
    }

    ngOnInit() {
    }

    selectEventType(eventType) {
        this.selectedEventType = eventType;
    }

}
