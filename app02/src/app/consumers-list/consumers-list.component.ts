import { Component,OnInit } from '@angular/core';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent implements OnInit {

  consumers!:Consumer[];

  constructor(private consumerService:ConsumerService){
    
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.consumers = this.consumerService.getAll();
  }
}
