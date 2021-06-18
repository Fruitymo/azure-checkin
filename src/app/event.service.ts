import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  async getEvents() {
    const response = await fetch('/api/events/');
    return await response.json();
  }

  async getEvent(eventId: string) {
    const response = await fetch(`/api/events/${eventId}`);
    return await response.json();
  }

  async createEvent() {

  }

  async freePass(eventId: string, userId: string) {

  }

  async getPass(eventId: string): Promise<string> {
    const url = `/api/events/${encodeURIComponent(eventId)}/pass`;
    const response = await fetch(url);
    return await response.json();
  }
}
