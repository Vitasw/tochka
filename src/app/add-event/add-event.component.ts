import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Event} from '../event';
import {EventType} from '../event-type.enum';
import {EventService} from '../event.service';

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.less']
})
export class AddEventComponent implements OnInit {

    event: Event;

    events: Array<string>;

    EventType = Object.assign({}, EventType);

    selectedEventType: string = EventType.NEWS;

    constructor(
        private eventService: EventService,
        private router: Router,
    ) {
        this.events = this.keys();
    }

    ngOnInit() {
    }

    keys(): Array<string> {
        return Object.keys(EventType);
    }

    selectEventType(eventType) {
        this.selectedEventType = eventType;
    }

}
