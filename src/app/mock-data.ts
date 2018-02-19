import { Event } from './event';
import { EventType } from './event-type.enum';
import { NewsEvent } from './news-event';
import { TransactionEvent } from './transaction-event';
import * as moment from 'moment';

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Срочная новость',
        body: 'Свинья села в лужу',
        type: EventType.NEWS,
        date: moment().subtract(5, 'days').valueOf(),
    } as NewsEvent,
    {
        id: 2,
        title: 'Сельские новости',
        body: 'К конюшнях закончился овес',
        type: EventType.NEWS,
        date: moment().subtract(1, 'days').valueOf(),
    } as NewsEvent,
    {
        id: 3,
        title: 'Новость 3',
        body: 'Азазазаза',
        type: EventType.NEWS,
        date: moment().valueOf(),
    } as NewsEvent,
];