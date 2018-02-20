import {Component, Input, OnInit} from '@angular/core';
import { Event } from '../event';
import { EventType } from '../event-type.enum';

@Component({
  selector: 'app-event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.less']
})
export class EventRowComponent implements OnInit {

    @Input() event: Event;

    EventTypes = Object.assign({}, EventType);

    constructor() { }

    ngOnInit() {
    }

}
