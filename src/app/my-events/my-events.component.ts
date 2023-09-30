import { Component } from '@angular/core';
import { EventsService } from '../services/events/events.service';
import { AuthService } from '../services/auth.service';
import { Event } from '../models/event.model';

@Component({
  selector: 'app-my-events',
  templateUrl: './my-events.component.html',
  styleUrls: ['./my-events.component.scss']
})
export class MyEventsComponent {
  public events: Event[];
  public role: string;

  constructor(
    private eventsService: EventsService,
    private authService: AuthService
  ) {
    this.role = localStorage.getItem('role');
  }

  ngOnInit() {
    this.getEvents();
  }

  private getEvents() {
    this.eventsService.getRegisteredEvents(this.authService.userValue.id).subscribe((response: any) => {
      this.events = response;
      this.events = response.map(function (item) {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          location: item.location,
          start_date: item.start_date,
          end_date: item.v,
          time: item.time,
          min_age: item.min_age
        };
      });
    });
  }
}
