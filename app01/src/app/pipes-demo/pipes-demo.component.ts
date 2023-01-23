import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent {

  str:string;
  num:number;
  dt:Date;

  constructor(){
    this.str="Hello, how are YOU!";
    this.num=12.345;
    this.dt=new Date();
  }
}
