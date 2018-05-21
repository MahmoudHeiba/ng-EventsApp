import { ISession } from './../shared/event.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { restrictedWords } from '../shared/restricted-word.validator';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm:FormGroup;
  name:FormControl;
  presenter:FormControl;
  duration: FormControl;
  level: FormControl;
  abstract: FormControl;
  constructor(private router:Router) { }

  ngOnInit() {
    this.name =new FormControl('',Validators.required);
    this.presenter =new FormControl('',Validators.required);
    this.duration =new FormControl('',Validators.required);
    this.level =new FormControl('',Validators.required);
    this.abstract =new FormControl('',[Validators.required, Validators.maxLength(400), restrictedWords(["foo","bar"])]);
    
    this.newSessionForm= new FormGroup({
      name:this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract
    })
  }

  saveSession(formValues){
    let session:ISession ={
      id:undefined,
      name: formValues.name,
      abstract: formValues.abstract,
      duration: +formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      voters: []
    }
    console.log(session)
  }

  cancel(){
    this.router.navigate(["events"]);
  }

}
