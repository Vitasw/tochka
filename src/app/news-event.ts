import { Event } from './event';
import { EventType } from './event-type.enum';

export class NewsEvent implements Event {
    id: number;
    title: string;
    body: string;
    date: number;
    type: EventType;
    haveRead: boolean;
}
