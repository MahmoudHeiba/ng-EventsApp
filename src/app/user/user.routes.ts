import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import {Routes} from "@angular/router"
export const userRoute:Routes =[
    {path: "login",component: LoginComponent },
    {path: "profile", component: ProfileComponent}
]