import {EventType} from './event-type.enum';
import {Event} from './event';

export class TransactionEvent implements Event {
    id: 1;
    amount: number;
    currency: string;
    from: string;
    description: string;
    date: number;
    type: EventType.TRANSACTION;
}