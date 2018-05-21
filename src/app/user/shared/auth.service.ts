import { IUser } from './user.model';
import { Injectable } from "@angular/core"
import { StringifyOptions } from 'querystring';

@Injectable()
export class AuthService{
    currentUser:IUser;

    loginUser(userName:string, password:string){
        this.currentUser = {
            id : 1,
            userName : userName,
            firstName : "Mahmoud",
            lastName : "Heiba" 
        }
    }

    isAuthenticated(){
        return !!this.currentUser;
    }

    updateCurrrentUser(firstName:string, lastName:string){
        this.currentUser.firstName=firstName;
        this.currentUser.lastName=lastName;
    }
}