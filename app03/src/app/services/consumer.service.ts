import { Injectable } from '@angular/core';
import { max } from 'rxjs';
import { Consumer } from '../models/consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  consumers: Consumer[];

  constructor() {
    this.consumers = [
      { id: 1, fullName: 'Vamsy Kiran Aripaka', mobile: '9052224754', mailId: "vamsy@gmail.com" },
      { id: 2, fullName: 'Suseela Aripaka', mobile: '9052224755', mailId: "susy@gmail.com" },
      { id: 3, fullName: 'IndhikaaValli Aripaka', mobile: '9052224756', mailId: "indu@gmail.com" }
    ];
  }

  getAll(): Consumer[] {
    return this.consumers;
  }

  getById(id: number): Consumer | undefined {
    return this.consumers.find(c => c.id == id);
  }

  add(c: Consumer): Consumer {
    let maxId = this.consumers.length === 0 ? 0 :
      this.consumers.map(cons => cons.id).reduce((id1, id2) => Math.max(id1, id2));
    c.id = maxId + 1;
    this.consumers.push(c);
    return c;
  }

  deleteById(id: number): void {
    let index = this.consumers.findIndex(c => c.id == id);
    if (index > -1) {
      this.consumers.splice(index, 1);
    }
  }

  update(c: Consumer): Consumer {
    let index = this.consumers.findIndex(con => con.id == c.id);
    if (index > -1) {
      this.consumers[index] = c;
    }
    return c;
  }
}
