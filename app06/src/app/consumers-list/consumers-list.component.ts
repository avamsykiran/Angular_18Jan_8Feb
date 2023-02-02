import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Consumer } from '../models/consumer';
import { ConsumerService } from '../services/consumer.service';

@Component({
  selector: 'app-consumers-list',
  templateUrl: './consumers-list.component.html',
  styleUrls: ['./consumers-list.component.css']
})
export class ConsumersListComponent implements OnInit {

  consumers!: Consumer[];
  errMsg!: string;

  constructor(private consumerService: ConsumerService) {

  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    let ob: Observable<Consumer[]> = this.consumerService.getAll();
    ob.subscribe({
      next: data => this.consumers = data,
      error: err => { console.log(err); this.errMsg = "Unable to load data! Please retry later"; }
    });
  }

  remove(id: number) {
    let ob: Observable<void> = this.consumerService.deleteById(id);
    ob.subscribe({
      next: () => this.loadData(),
      error: err => { console.log(err); this.errMsg = "Unable to remove data! Please retry later"; }
    })
  }
}
