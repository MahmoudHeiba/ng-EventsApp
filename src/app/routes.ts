import { CreateEventComponent } from './events/create-event/create-event.component';
import { UserModule } from './user/user.module';
import { Component } from '@angular/core';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {Routes} from  "@angular/router"
import { EventsListComponent } from "./events/events-list/events-list.component";
import { Error404Component } from './error/404.component';
import { EventRoutActivatorService } from './events/event-details/event-route-activator.service';

export const appRoute :Routes =[
    {path:"events", component:EventsListComponent},
    {path:"eventes/new",component:CreateEventComponent},
    {path:"events/:id", component:EventDetailsComponent, canActivate:[EventRoutActivatorService]},
    {path:"404",component:Error404Component},
    {path:"",redirectTo:"/events",pathMatch:"full"},
    {path:"user",loadChildren:()=>UserModule},
    // {path:"user",loadChildren:"app/user/user.module#UserModule"}
];;