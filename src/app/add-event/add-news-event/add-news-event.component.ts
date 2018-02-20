import { Component, OnInit } from '@angular/core';
import { NewsEvent } from '../../news-event';
import * as moment from 'moment';
import { EventService } from '../../event.service';
import { Router } from '@angular/router';
import { EventType } from '../../event-type.enum';

@Component({
    selector: 'app-add-news-event',
    templateUrl: './add-news-event.component.html',
    styleUrls: ['./add-news-event.component.less']
})
export class AddNewsEventComponent implements OnInit {

    event: NewsEvent;
    formatDate: string;

    constructor(private eventService: EventService,
                private router: Router) {
        this.event = new NewsEvent();
        this.event.type = EventType.NEWS;
        this.event.date = moment().valueOf();
        this.formatDate = moment(this.event.date).format('YYYY-MM-DDTHH:mm:ss');
    }

    ngOnInit() {
    }

    add(): void {
        this.event.title = this.event.title.trim();
        if (!this.event.title.length) {
            return;
        }
        this.event.date = moment(this.formatDate).valueOf();
        this.eventService
            .addEvent(this.event)
            .subscribe(status => {
                if (status) {
                    this.router.navigate(['events']);
                }
            });
    }

}
