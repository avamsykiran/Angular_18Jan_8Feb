import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  conForm:FormGroup;

  cid:FormControl;
  fnm:FormControl;
  mno:FormControl;
  mid:FormControl;
  
  isNew:boolean;

  constructor(private cs:ConsumerService,private router:Router,private activatedRoute:ActivatedRoute){
    
    this.cid=new FormControl(0);
    this.fnm=new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]);
    this.mno=new FormControl('',[Validators.required,Validators.pattern('[1-9][0-9]{9}')]);
    this.mid=new FormControl('',[Validators.required,Validators.email]);
    
    this.conForm=new FormGroup({id:this.cid,fullName:this.fnm,mobile:this.mno,mailId:this.mid});
    this.isNew=true;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.isNew=false;
      let consumer:Consumer = this.cs.getById(id)??{id:0,fullName:'',mobile:'',mailId:''};
      this.conForm.reset(consumer);
    }
  }

  save(){
    let consumer:Consumer = this.conForm.value;
    if(this.isNew){
      this.cs.add(consumer);
    }else{
      this.cs.update(consumer);
    }
    
    this.router.navigateByUrl("/list");
  }
}
