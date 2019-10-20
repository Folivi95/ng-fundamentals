import { Injectable } from '@angular/core';
import { EventService } from './event.service';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {

  id = 'id';

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    let eventExists: boolean;
    eventExists = !!this.eventService.getEvent(+route.params[this.id]);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
