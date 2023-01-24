import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumer-form',
  templateUrl: './consumer-form.component.html',
  styleUrls: ['./consumer-form.component.css']
})
export class ConsumerFormComponent {

  consumer:Consumer;

  constructor(private cs:ConsumerService,private router:Router){
    this.consumer={id:0,fullName:'',mobile:'',mailId:''};
  }

  save(){
    this.cs.add(this.consumer);
    this.router.navigateByUrl("/list");
  }
}
