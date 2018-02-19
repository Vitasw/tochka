import {Component, Input, OnInit} from '@angular/core';
import { NewsEvent } from '../news-event';
import * as moment from 'moment';
import {EventService} from '../event.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-event-view',
  templateUrl: './news-event-view.component.html',
  styleUrls: ['./news-event-view.component.css']
})
export class NewsEventViewComponent implements OnInit {

    @Input() event: NewsEvent;

    constructor(
        private eventService: EventService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    read(): void {
        if (this.event.title.trim()) {
            this.eventService
                .haveReadNews(this.event.id)
                .subscribe(status => {
                    if (status) {
                        this.event.haveRead = true;
                    }
                });
        }
    }

}
