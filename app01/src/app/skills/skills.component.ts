import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills:string[];
  skill:string;

  constructor(){
    this.skill="";
    this.skills=[];
  }

  add(){
    if(this.skill.trim().length!=0){
      this.skills.push(this.skill);
    }
  }

  remove(){
    if(this.skill.trim().length!=0){
      let index = this.skills.findIndex(s => s===this.skill);
      if(index>-1){
        this.skills.splice(index,1);
      }
    }
  }
}
