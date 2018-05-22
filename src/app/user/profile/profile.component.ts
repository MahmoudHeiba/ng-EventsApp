import { Toastr_Token, IToastr } from './../../common/toastr.service';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm : FormGroup;
  firstName :FormControl;
  lastName: FormControl;
  constructor(private auth:AuthService, private router:Router, @Inject(Toastr_Token) private toastr:IToastr ) { }

  ngOnInit() {
    this.firstName= new FormControl(this.auth.currentUser.firstName, Validators.required);
    this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })  
  }
  saveProfile(profileValues){
    if (this.profileForm.valid) {
      this.auth.updateCurrrentUser(profileValues.firstName, profileValues.lastName);
      this.toastr.success("update success");
    }
  }
  cancel(){
    this.router.navigate(['events']);
  }

  validFirstName(){
    return this.firstName.valid || this.firstName.untouched;
  }
  validLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}
