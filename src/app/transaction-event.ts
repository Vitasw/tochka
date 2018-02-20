import { EventType } from './event-type.enum';
import { Event } from './event';

export class TransactionEvent implements Event {
    id: number;
    amount: number;
    currency: string;
    from: string;
    description: string;
    date: number;
    type: EventType;
}
