import { IEvent } from './../shared/event.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event:IEvent;
  constructor() { }

  ngOnInit() {
  }
  getTimeFormat(){
    if (this.event && this.event.time == '8:00 am') {
      return ['green','blod']
    }else if (this.event && this.event.time == '10:00 am') {
      return ['red','blod']
    }else {
      return []
    }
  }
}
