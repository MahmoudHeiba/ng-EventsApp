import { ISession } from './../events/shared/event.model';
import { EventService } from './../events/shared/event.service';
import { AuthService } from './../user/shared/auth.service';
import {Component} from "@angular/core"
@Component({
    selector:"nav-bar",
    templateUrl:"./navbar.component.html",
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li >a.active {color: #F97924;}
    `]
})
export class NavbarComponent{
    searchTerm:string = ""
    foundSessions:ISession[]
    constructor(private auth:AuthService, private eventService :EventService){

    }
    searchSessions(searchTerm){
        this.foundSessions =  this.eventService.searchSessions(searchTerm)
            
        console.log(this.foundSessions)
    }
}