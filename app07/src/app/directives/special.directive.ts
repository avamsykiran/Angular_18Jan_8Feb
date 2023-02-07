import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appSpecial]'
})
export class SpecialDirective  {

  @Input()
  appSpecial!:string;

  constructor(private hostEle:ElementRef) {
   
  }

  applyColor(color:string){
    this.hostEle.nativeElement.style.backgroundColor=color;
  }

  @HostListener('mouseover')
  whenMouseIsOn(){
    this.applyColor(this.appSpecial || '#00ff00');
  }

  @HostListener('mouseleave')
  whenMouseIsOff(){
    this.applyColor('');
  }
}
