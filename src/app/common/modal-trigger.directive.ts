import { JQ_Token } from './jQuery.service';
import { Directive, OnInit, ElementRef, Inject, Input } from "@angular/core"

@Directive({
    selector: "[modal-trigger]"
})
export class ModalTriggerDirective implements OnInit {
 private el : HTMLElement
 @Input('modal-trigger') modalId:string
    constructor(ref :ElementRef, @Inject(JQ_Token) private $: any){
        this.el=ref.nativeElement;
    }
    ngOnInit(): void {
        this.el.addEventListener('click', e =>{
            this.$(`#${this.modalId}`).modal({});
        })

    }
}