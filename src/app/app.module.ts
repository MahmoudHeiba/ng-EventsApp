import { JQ_Token } from './common/jQuery.service';
import { DurationPipe } from './events/shared/duration.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from './user/shared/auth.service';
import { EventRoutActivatorService } from './events/event-details/event-route-activator.service';
import { appRoute } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { Toastr_Token, IToastr } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './error/404.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { CreateSessionComponent } from './events/create-session/create-session.component';
import { SessionsListComponent } from './events/sessions-list/sessions-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';

declare let toastr:IToastr;
declare let jQuery:object;


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionsListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    EventService,
    {provide:Toastr_Token, useValue : toastr},
    {provide:JQ_Token, useValue : jQuery},    
    EventRoutActivatorService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
