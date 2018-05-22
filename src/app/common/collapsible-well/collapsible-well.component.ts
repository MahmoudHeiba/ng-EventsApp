import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible-well',
  templateUrl: './collapsible-well.component.html',
  styleUrls: ['./collapsible-well.component.css']
})
export class CollapsibleWellComponent implements OnInit {
  visable = true;
  constructor() { }

  ngOnInit() {
  }
  toggleContent(){
    this.visable = !this.visable;
  }
}
