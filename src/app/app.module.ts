import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventService } from './event.service';
import { EventListComponent } from './event-list/event-list.component';
import { EventRowComponent } from './event-row/event-row.component';
import { NewsEventRowComponent } from './news-event-row/news-event-row.component';
import { TransactionEventRowComponent } from './transaction-event-row/transaction-event-row.component';
import { AppRoutingModule } from './app-routing.module';
import { EventViewComponent } from './event-view/event-view.component';
import { NewsEventViewComponent } from './news-event-view/news-event-view.component';


@NgModule({
    declarations: [
        AppComponent,
        EventListComponent,
        EventRowComponent,
        NewsEventRowComponent,
        TransactionEventRowComponent,
        EventViewComponent,
        NewsEventViewComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        EventService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
