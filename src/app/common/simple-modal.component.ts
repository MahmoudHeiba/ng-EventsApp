import { JQ_Token } from './jQuery.service';
import { Component, Input, ViewChild, ElementRef, Inject } from "@angular/core"

@Component({
    selector:"simple-modal",
    template:`
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1">
    <div class="modal-dialog">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
            </button>
            <h4 class="modal-title">{{title}}</h4>
        </div>
        <div class="modal-body" (click)="closeModal()">
            <ng-content></ng-content>
        </div>
    </div>
    </div>
    `,
    styles:[`
    .modal-body {heigth:250px; overflow-y:scroll;}
    `]
})
export class SimpleModalComponent{
    @Input() title:string
    @Input() elementId:string
    @ViewChild('modalContainer') modalElement : ElementRef 
    
    constructor(@Inject(JQ_Token) private $: any){

    }
    
    closeModal(){
        this.$(this.modalElement.nativeElement).modal('hide')
    }
}