import { Injectable } from "@angular/core"
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router"
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRoutActivatorService implements CanActivate {
    constructor(private eventService:EventService, private router:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const eventExist = !!this.eventService.getEvent(+ route.params["id"]);
        if (!eventExist) {
            this.router.navigate(["/404"]);
        }
        return eventExist;
    }
}