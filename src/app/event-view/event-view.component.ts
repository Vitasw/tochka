import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Event} from '../event';
import {EventType} from '../event-type.enum';
import {EventService} from '../event.service';

@Component({
    selector: 'app-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

    event: Event;

    EventType = Object.assign({}, EventType);

    constructor(
        private eventService: EventService,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.getEvent();
    }

    getEvent(): void {
        const eventId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.eventService
            .getEvent(eventId)
            .subscribe(event => this.event = event);
    }

}
