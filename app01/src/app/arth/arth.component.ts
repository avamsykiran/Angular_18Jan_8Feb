import { Component } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent {

  op1:number;
  op2:number;

  constructor(){
    this.op1=10;
    this.op2=10;
  }
}
