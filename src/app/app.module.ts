import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventService } from './event.service';
import { EventListComponent } from './event-list/event-list.component';
import { EventRowComponent } from './event-row/event-row.component';
import { NewsEventRowComponent } from './news-event-row/news-event-row.component';
import { TransactionEventRowComponent } from './transaction-event-row/transaction-event-row.component';
import { AppRoutingModule } from './app-routing.module';
import { EventViewComponent } from './event-view/event-view.component';
import { NewsEventViewComponent } from './news-event-view/news-event-view.component';
import { TransactionEventViewComponent } from './transaction-event-view/transaction-event-view.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsEventComponent } from './add-event/add-news-event/add-news-event.component';
import { AddTransactionEventComponent } from './add-event/add-transaction-event/add-transaction-event.component';


@NgModule({
    declarations: [
        AppComponent,
        EventListComponent,
        EventRowComponent,
        NewsEventRowComponent,
        TransactionEventRowComponent,
        EventViewComponent,
        NewsEventViewComponent,
        TransactionEventViewComponent,
        AddEventComponent,
        AddNewsEventComponent,
        AddTransactionEventComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        EventService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
