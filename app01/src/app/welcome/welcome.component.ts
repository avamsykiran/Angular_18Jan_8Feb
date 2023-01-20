import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  logos:string[];
  logoIndex:number;
  logoWidth:number;

  flagC:boolean;
  flagB:boolean;

  constructor(){
    this.userName="SomeBody";
    this.logos=[
      "assets/imgs/n1.jpg",
      "assets/imgs/n2.jpg",
      "assets/imgs/n3.jpg",
      "assets/imgs/n4.jpg"
    ];
    this.logoIndex=0;
    this.logoWidth=200;
    this.flagB=true;
    this.flagC=true;
  }

  nextLogo(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
