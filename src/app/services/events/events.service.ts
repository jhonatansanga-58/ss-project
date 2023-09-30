import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateEventDto, UpdateEventDto } from 'src/app/dto/event.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(
    private http: HttpClient
  ) { }

  public getEvents() {
    return this.http.get(`${environment.apiUrl}/event`);
  }

  public getUnregisteredEvents(id) {
    return this.http.get(`${environment.apiUrl}/event/unregistered/` + id);
  }

  public getRegisteredEvents(id) {
    return this.http.get(`${environment.apiUrl}/event/registered/` + id);
  }

  public getEventInfo(id) {
    return this.http.get(`${environment.apiUrl}/event/info/` + id);
  }

  public registerToEvent(userId, eventId) {
    return this.http.post(`${environment.apiUrl}/event/register`, { user_id: userId, event_id: eventId });
  }

  public unregisterFromEvent(userId, eventId) {
    return this.http.delete(`${environment.apiUrl}/event/unregister/` + userId + '/' + eventId);
  }

  public createEvent(event: CreateEventDto) {
    return this.http.post(`${environment.apiUrl}/event/create`, event);
  }
  
  public updateEvent(event: UpdateEventDto) {
    return this.http.put(`${environment.apiUrl}/event/update`, event);
  }
}
