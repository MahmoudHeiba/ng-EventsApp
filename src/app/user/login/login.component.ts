import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }
  login(loginForm){
    this.auth.loginUser(loginForm.userName, loginForm.password)
    this.router.navigate(["events"]);
  }
  cancel(){
    console.log("cnacel");
    this.router.navigate(["events"]);
  }

}
