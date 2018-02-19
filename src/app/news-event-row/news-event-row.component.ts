import { Component, Input, OnInit } from '@angular/core';
import { NewsEvent } from '../news-event';

@Component({
    selector: 'app-news-event-row',
    templateUrl: './news-event-row.component.html',
    styleUrls: ['./news-event-row.component.css']
})
export class NewsEventRowComponent implements OnInit {

    @Input() event: NewsEvent;

    constructor() { }

    ngOnInit() {
    }

}
