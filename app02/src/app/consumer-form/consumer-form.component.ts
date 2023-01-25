import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent implements OnInit {

  consumer:Consumer;
  isNew:boolean;

  constructor(private cs:ConsumerService,private router:Router,private activatedRoute:ActivatedRoute){
    this.consumer={id:0,fullName:'',mobile:'',mailId:''};
    this.isNew=true;
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    if(id){
      this.isNew=false;
      this.consumer = this.cs.getById(id)??{id:0,fullName:'',mobile:'',mailId:''};
    }
  }

  save(){
    if(this.isNew){
      this.cs.add(this.consumer);
    }else{
      this.cs.update(this.consumer);
    }
    
    this.router.navigateByUrl("/list");
  }
}
