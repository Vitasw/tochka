import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Event } from './event';
import { EVENTS } from './mock-data';
import {NewsEvent} from './news-event';

@Injectable()
export class EventService {

    private events: Event[];
    private lastId = 0;

    constructor() {
        this.events = EVENTS;
        this.events.map(event => this.lastId = event.id > this.lastId ? event.id : this.lastId);
    }

    getEvents(): Observable<Event[]> {
        return of(this.events.slice());
    }

    getEvent(id: number): Observable<Event> {
        const event = this.events.find(e => e.id === id);
        if (event) {
            return of(Object.assign({}, event));
        } else {
            // todo
        }
    }

    addEvent(event: Event): Observable<boolean> {
        event.id = ++this.lastId;
        event.date = Date.now();
        this.events.push(event);
        return of(true);
    }

    saveEvent(event: Event): Observable<boolean> {
        let fEvent = this.events.find(e => e.id === event.id);
        if (fEvent) {
            fEvent = Object.assign(fEvent, event);
            return of(true);
        } else {
            return of(false);
        }
    }

    haveReadNews(id: number): Observable<boolean> {
        const fEvent: NewsEvent = this.events.find(e => e.id === event.id);
        if (fEvent) {
            fEvent.haveRead = true;
            return of(true);
        } else {
            return of(false);
        }
    }

}
