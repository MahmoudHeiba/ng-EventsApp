import { IEvent, ISession } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:IEvent;
  addMode=false
  filterBy = "all"
  sortBy = "votes"
  constructor(private eventService :EventService, private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.forEach((params:Params)=>{
      this.event=this.eventService.getEvent(+params["id"]);
      this.addMode=false
      this.filterBy = "all"
      this.sortBy = "votes"
          
    })
  }
  addSession(){
    this.addMode = true;
  }
  addNewSession(session:ISession){
    console.log(session)
    const maxId = Math.max.apply(null,this.event.sessions.map(a=>a.id))
    session.id = maxId + 1 ;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode =false

  }
  cancelNewSession(){
    this.addMode = false;
  }
}
