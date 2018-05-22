import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.events=this.eventService.getEvents();
  }

}
