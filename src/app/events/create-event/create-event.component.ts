import { Router } from '@angular/router';
import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  constructor(private eventServe:EventService, private router:Router) { }

  ngOnInit() {
  }
  saveEvent(formValues){
    this.eventServe.addEevent(formValues);
   // this.router.navigate(['events']);
  }
  cancel(){
    this.router.navigate(['events']);
  }

}
