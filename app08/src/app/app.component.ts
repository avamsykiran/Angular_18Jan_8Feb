import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string;

  constructor(){
    this.title="Angular Testing Demo";
  }

  btnClicked(){
    this.title="Angular Button Click Event Testing";
  }
}
