import { ISession } from './../shared/event.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sessions-list',
  templateUrl: './sessions-list.component.html',
  styleUrls: ['./sessions-list.component.css']
})
export class SessionsListComponent implements OnInit, OnChanges {
  @Input() sessions:ISession[]  
  @Input() filterBy:string
  @Input() sortBy:string
  visasbleSession:ISession[]
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visasbleSession.sort(sortByNameAsc):this.visasbleSession.sort(sortByVotesDesc)
    }
  }
  filterSessions(filter){
    if (this.filterBy === 'all') {
      this.visasbleSession = this.sessions.slice(0);
    }else
    {
      this.visasbleSession = this.sessions.filter(session =>{
        return session.level.toLocaleLowerCase() === filter
      })
    }
  }

}
function sortByNameAsc(s1:ISession,s2:ISession) {
  if (s1.name > s2.name) {
    return 1
  }else if (s1.name === s2.name) {
    return 0
  }else return -1;
}
function sortByVotesDesc(s1:ISession, s2:ISession){
  return s2.voters.length - s1.voters.length
}