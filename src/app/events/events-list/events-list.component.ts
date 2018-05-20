import { ToastrService } from './../../common/toastr.service';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events:any;
  constructor(private eventService:EventService, private toastr:ToastrService) { }

  ngOnInit() {
    this.events=this.eventService.getEvents();
  }
  handleThumbnailClick(event){
    this.toastr.success(event.name);
  }
}
