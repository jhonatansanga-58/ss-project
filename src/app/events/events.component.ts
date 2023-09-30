import { Component, OnInit } from '@angular/core';
import { EventsService } from '../services/events/events.service';
import { Event } from '../models/event.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
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

  getEvents() {
    if (localStorage.getItem('role') === '1')
      this.eventsService.getUnregisteredEvents(this.authService.userValue.id).subscribe((response: any) => {
        this.fillEvents(response);
      });
    else
      this.eventsService.getEvents().subscribe((response: any) => {
        this.fillEvents(response);
      });
  }

  private fillEvents(response) {
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
  }
}
