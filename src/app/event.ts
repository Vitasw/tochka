import { EventType } from './event-type.enum';

export interface Event {
    id: number;
    type: EventType;
    date: number;
}
