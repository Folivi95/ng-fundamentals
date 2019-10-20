import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventsComponent } from './app/events/create-events/create-events.component';
import { NotFoundComponent } from './app/errors/not-found/not-found.component';
import { EventRouteActivatorService } from './app/events/shared/event-route-activator.service';
import { EventListResolverService } from './app/events/shared/event-list-resolver.service';
import { CreateSessionComponent } from './app/events/event-details/create-session/create-session.component';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventsComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: NotFoundComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: () => import('../src/app/user/user.module').then(m => m.UserModule) }
];
