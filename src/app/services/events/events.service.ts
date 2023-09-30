import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
