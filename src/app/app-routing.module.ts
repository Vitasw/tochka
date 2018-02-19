import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventListComponent } from './event-list/event-list.component';
import { EventViewComponent } from './event-view/event-view.component';
import {AddEventComponent} from './add-event/add-event.component';

const routes: Routes = [
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'events', component: EventListComponent },
    { path: 'event/:id', component: EventViewComponent },
    { path: 'add', component: AddEventComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
