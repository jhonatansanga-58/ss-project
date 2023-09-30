import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event.model';
import { EventsService } from '../services/events/events.service';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['./event-info.component.scss']
})
export class EventInfoComponent implements OnInit {
  eventId: string;
  public event: Event;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {
    this.eventId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getEventInfo();
  }

  getEventInfo() {
    this.eventsService.getEventInfo(this.eventId).subscribe((response: any) => {
      this.event = response;
    });
  }
}
